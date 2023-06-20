import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    </div>
  );
};

export default Home;
