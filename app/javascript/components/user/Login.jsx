import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Link, Box, FormHelperText } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    width: '300px',
  },
  submitButton: {
    margin: theme.spacing(2, 0, 1),
  },
}));

const Login = ({setUser, user}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const [signinError, setSigninError] = useState('');

  useEffect(() => {
    if (user){
      navigate("/");
    }
  }, [user]);

  const handleSubmit = async e => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    }

    try {
      const response = await axios.post('/auth/sign_in', userData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      });
      if (response.status === 200) {
        localStorage.setItem('user', response.data.data);
        localStorage.setItem('token', response.headers['access-token']);
        localStorage.setItem('client', response.headers['client']);
        localStorage.setItem('uid', response.headers['uid']);
        setUser(response.data.data);
      }
    } catch (error2) {
      const errorMsg = error2.response.data.errors
      setSigninError(errorMsg)
    }
  };

  return (
    <Box className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <br />
          {signinError && <FormHelperText error>{signinError}</FormHelperText>}
        <br />
        <TextField 
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <TextField 
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button
         type="submit"
         variant="contained"
         color="primary"
         className={classes.submitButton}
         onClick={handleSubmit}
        >
          Log In
        </Button>
        <Link href="/signup">Don't have an account? Sign Up</Link>
      </form>
    </Box>
  );
};

export default Login;
