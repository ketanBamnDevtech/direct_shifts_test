import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { Pagination } from '@mui/material';

const GetReferral = () => {
  const [referrals, setReferrals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const client = localStorage.getItem('client');
  const uid = localStorage.getItem('uid');
  const token = localStorage.getItem('token');

  const fetchReferrals = async () => {
    try {
      const response = await axios.get(`/api/v1/user_referrals?page=${currentPage}`, {
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
        setTotalPages(response.data.total_pages);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchReferrals();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

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
              <Fragment key={index}>
                <TableRow key={`row_${index}`}>
                  <TableCell key={`serialNumber_${index}`}>{index + 1}</TableCell>
                  <TableCell key={`email_${index}`}>{referral.email}</TableCell>
                </TableRow>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {referrals.length > 0 && <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />}
    </>
  );
}

export default GetReferral;
