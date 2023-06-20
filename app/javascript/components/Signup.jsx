import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '5px',
  },
  input: {
    margin: '10px 0',
  },
  button: {
    margin: '20px 0',
  },
}));

const Signup = ({setUser, user}) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user){
      navigate("/");
    }
  }, [user]);

  const handleSignup = () => {
    const userData = {
      name: name,
      email: email,
      password: password,
    }
    axios.post('/auth', userData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
    .then(response => {
      if(response.status === 200) {
        localStorage.setItem('token', response.headers['access-token']);
        localStorage.setItem('client', response.headers['client']);
        localStorage.setItem('uid', response.headers['uid']);
        localStorage.setItem('user', response.data.data);
        setUser(response.data.data);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <TextField
          className={classes.input}
          label='Username'
          variant='outlined'
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <TextField
          className={classes.input}
          label='Email'
          variant='outlined'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          className={classes.input}
          label='Password'
          type='password'
          variant='outlined'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          onClick={handleSignup}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
