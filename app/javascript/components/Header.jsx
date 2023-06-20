import React, { useEffect} from "react";
import { Box, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

const Header = ({setUser, user}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('client');
    localStorage.removeItem('uid');
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    if (!user){
      navigate('/login')
    }
  }, [user]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: '10px',
        }}
      >
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </>
  )
}

export default Header;
