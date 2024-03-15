import React, { useState } from "react";
import { TextField, Button, Container, makeStyles } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom"; // Import useHistory hook
import "../styles/form/LoginForm.css";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));





const LoginForm = ({ onLogin }) => {
  const classes = useStyles();
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const history = useHistory(); 

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    setError("");

    // Basic input validation
    if (!userData.username || !userData.password) {
      setError("Username and password are required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        userData
      );
      if (response.status === 200) {
        const { token, redirectUrl } = response.data;
        // Save token to local storage
        localStorage.setItem("token", token);
        // Call the onLogin callback with the token
        onLogin(token);
        // Redirect to default route or specified redirect URL using history
        history.push(redirectUrl || "/trending-videos");
        // Show success message
        alert("Login successful");
      }
    } catch (error) {
      console.error("Failed to login", error);
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <form className={classes.form} onSubmit={handleLoginFormSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <TextField
          className={classes.textField}
          label="Username"
          variant="outlined"
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
          required
        />
        <TextField
          className={classes.textField}
          label="Password"
          variant="outlined"
          type="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
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
