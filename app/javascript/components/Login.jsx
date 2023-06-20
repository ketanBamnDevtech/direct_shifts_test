import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Link, Box } from '@material-ui/core';
import axios from 'axios';

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

const Login = ({setUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.data) {
          setUser(response.data.user);
          localStorage.setItem('token', response.data.token);
        }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField id="email" label="Email" variant="outlined" margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
        <TextField id="password" label="Password" type="password" variant="outlined" margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
        <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
          Log In
        </Button>
        <Link href="/signup">Don't have an account? Sign Up</Link>
      </form>
    </Box>
  );
};

export default Login;
