// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'; // Import your authSlice reducer

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your authSlice reducer to the root reducer
    // Add other slices as needed
  },
});

export default store;
