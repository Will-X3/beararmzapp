import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './store/store'; // Import your Redux store
import App from './App';
import { AuthProvider } from './auth/AuthContext'; // Import the AuthProvider

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}> {/* Wrap your app with Provider and pass the store */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);
