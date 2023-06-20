import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";

const GetReferral = () => {
  const [referrals, setReferrals] = useState([]);
  const client = localStorage.getItem('client');
  const uid = localStorage.getItem('uid');
  const token = localStorage.getItem('token');

  const fetchReferrals = async () => {
    try {
      const response = await axios.get(`/api/v1/user_referrals`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          client: client,
          uid: uid,
          "access-token": token
        }
      });
      if (response.status === 200) {
        setReferrals(response.data.referrals)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchReferrals();
  }, []);

  return (
    <>
      <h2>Referral list:</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {referrals.map((referral, index) => (
              <>
                <TableRow key={index}>
                  <TableCell key={index}>{index + 1}</TableCell>
                  <TableCell key={index}>{referral.email}</TableCell><br />
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default GetReferral;
