import React, { useState } from 'react';
import { TextField, Button, Container, makeStyles } from '@material-ui/core';
import axios from 'axios';
import '../styles/form/LoginForm.css';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Basic input validation
    if (!userData.username || !userData.password) {
      setError('Username and password are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/auth/login', userData);
      if (response.status === 200) {
        alert('Login successful'); // You can redirect the user to another page after successful login
        setUserData({ username: '', password: '' }); // Clear form fields
      }
    } catch (error) {
      console.error('Failed to login', error);
      alert('Failed to login');
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <form className={classes.form} onSubmit={handleLoginFormSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <TextField
          className={classes.textField}
          label="Username"
          variant="outlined"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          required
        />
        <TextField
          className={classes.textField}
          label="Password"
          variant="outlined"
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
