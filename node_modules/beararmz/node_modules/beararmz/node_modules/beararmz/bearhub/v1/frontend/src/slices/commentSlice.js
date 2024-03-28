import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    submitCommentStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    submitCommentSuccess: (state, action) => {
      state.loading = false;
      state.comments.push(action.payload);
    },
    submitCommentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Destructure the actions from the slice
const { submitCommentStart, submitCommentSuccess, submitCommentFailure } = commentSlice.actions;

// Define the submitComment action creator function
export const submitComment = (commentData) => async (dispatch) => {
  try {
    // Dispatch submitCommentStart action to set loading state
    dispatch(submitCommentStart());

    // Make POST request to submit the comment
    const response = await axios.post('http://localhost:5000/v1/bearhub/comment', commentData);

    // Dispatch submitCommentSuccess action with the new comment data
    dispatch(submitCommentSuccess(response.data));
  } catch (error) {
    // Dispatch submitCommentFailure action with the error message
    dispatch(submitCommentFailure(error.message));
  }
};

// Export the reducer
export default commentSlice.reducer;
