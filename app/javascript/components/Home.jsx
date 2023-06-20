import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GetReferral from "./referral/GetReferral";

const Home = ({user, setUser}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user){
      navigate("/");
    }
    else {
      navigate("/login");
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('client');
    localStorage.removeItem('uid');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div>
      <div>
        <p>Welcome, {user.name}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <GetReferral />
    </div>
  );
};

export default Home;
