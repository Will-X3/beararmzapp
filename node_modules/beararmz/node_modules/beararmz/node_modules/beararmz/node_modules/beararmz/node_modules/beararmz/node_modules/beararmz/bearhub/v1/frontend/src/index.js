// index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './auth/AuthContext'; // Import the AuthProvider

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AuthProvider> {/* Wrap the App component with AuthProvider */}
      <App />
    </AuthProvider>
  </BrowserRouter>
);
