import React, { useState } from 'react';
import { TextField, Button, Container, makeStyles } from '@material-ui/core';
import axios from 'axios';
import '../styles/form/RegistrationForm.css';

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

const RegistrationForm = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState({ username: '', email: '', password: '' }); 
  const [error, setError] = useState('');

  const handleUserFormSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Basic input validation
    if (!userData.username || !userData.email || !userData.password) { 
      setError('Username, email, and password are required.'); 
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/v1/bearhub/users', userData);
      if (response.status === 201) {
        alert('User created successfully');
        setUserData({ username: '', email: '', password: '' }); 
      }
    } catch (error) {
      console.error('Failed to create user', error);
      alert('Failed to create user');
    }
  };

  return (
    <Container>
      <h1>Register for an Account here</h1>
      <form className={classes.form} onSubmit={handleUserFormSubmit}>
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
          label="Email"
          variant="outlined"
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
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
          Create User
        </Button>
      </form>
    </Container>
  );
};

export default RegistrationForm;
