import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Box, FormHelperText } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
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

const CreateReferral = () => {
  const classes = useStyles();
  const [referralEmail, setReferralEmail] = useState('');
  const [referralMessage, setReferralMessage] = useState('');
  const client = localStorage.getItem('client');
  const uid = localStorage.getItem('uid');
  const token = localStorage.getItem('token');

  const createReferrals = async (e) => {
    e.preventDefault();

    const referralData = {
      referral: {email: referralEmail}
    }

    try {
      const response = await axios.post(`/api/v1/referrals`, referralData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          client: client,
          uid: uid,
          "access-token": token
        }
      });
      if (response.status === 200) {
        setReferralMessage('Referral sent successfully')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2>Send Referral:</h2>

      <br />
      {referralMessage && (
        <FormHelperText sx={{ color: 'green' }}>{referralMessage}</FormHelperText>
      )}
      <br />

      <Box className={classes.root}>
        <form className={classes.form} onSubmit={createReferrals}>
          <TextField 
            id="referralEmail"
            label="Referral Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={referralEmail}
            onChange={e => setReferralEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </form>
    </Box>
    </>
  );
}

export default CreateReferral;
