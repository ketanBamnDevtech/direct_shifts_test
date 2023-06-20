import React from "react";
import GetReferral from "./referral/GetReferral";
import { Button } from '@material-ui/core';

const Home = ({user}) => {

  return (
    <div>
      <div>
        <p>Welcome, {user.name}</p>
      </div>

      <Button variant="contained" color="primary" href="/send_referral">
        Send Referral
      </Button>
      <GetReferral />
    </div>
  );
};

export default Home;
