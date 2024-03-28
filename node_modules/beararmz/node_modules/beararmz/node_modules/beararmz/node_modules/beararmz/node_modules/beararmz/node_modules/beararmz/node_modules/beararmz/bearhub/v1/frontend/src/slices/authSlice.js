import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      // Clear user data from local storage upon logout
      localStorage.removeItem('user');
    },
    
  },
});

export const { setUser, setError, logout } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
