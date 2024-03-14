import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../../forms/LoginForm';
import RegistrationForm from '../../forms/RegistrationForm';

const AuthPage = () => {
  const history = useHistory();
  const [showRegistration, setShowRegistration] = useState(false);



  

  // Callback function to handle login
  const handleLogin = (token) => {
    // Store token in local storage
    localStorage.setItem('token', token);
    // Redirect to default route or specific route
    history.push('/'); // Change to your default route
  };

  // Callback function to handle registration
  const handleRegistration = () => {
    // Optionally, you can perform some action after registration
    // For example, you can redirect the user to the login form
    setShowRegistration(false); // Hide registration form after successful registration
    history.push('/auth');
  };

  return (
    <div className="container">
      <h1>Welcome to AuthPage</h1>
      <div className="form-container">
        {!showRegistration ? (
          <div>
            <h2>Login</h2>
            <LoginForm onLogin={handleLogin} />
            <p>
              Not a member?{' '}
              <button onClick={() => setShowRegistration(true)}>Register Here</button>
            </p>
          </div>
        ) : (
          <div>
            <h2>Register</h2>
            <RegistrationForm onRegistration={handleRegistration} />
            <p>
              Already have an account?{' '}
              <button onClick={() => setShowRegistration(false)}>Login Here</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
