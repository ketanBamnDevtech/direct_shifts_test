import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Signup from "../components/user/Signup";
import Login from "../components/user/Login";

const AppRoutes = ({user, setUser}) => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login setUser={setUser} user={user}/>} />
        <Route path='/signup' element={<Signup setUser={setUser} user={user} />} />
        <Route path='/' element={user ? <Home user={user} setUser={setUser} /> : <Login setUser={setUser} user={user}/>} />
      </Routes>
    </Router>
  )
};

export default AppRoutes;
