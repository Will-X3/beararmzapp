import { configureStore } from '@reduxjs/toolkit';
import authReducer, { setUser } from '../slices/authSlice';
import axios from 'axios';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers as needed
  },
});

// Load user state from local storage if available
const storedToken = localStorage.getItem('token');
if (storedToken) {
  // Fetch user data using the token
  axios.get('http://localhost:5000/v1/bearhub/users', {
    headers: {
      Authorization: `Bearer ${storedToken}`,
    },
  })
  .then(response => {
    const userData = response.data;
    // Dispatch setUser action with user data
    store.dispatch(setUser(userData));
  })
  .catch(error => {
    console.error('Failed to fetch user data:', error);
    // Handle error if necessary
  });
}

export default store;
