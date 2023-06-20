import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";

const AppRoutes = ({user, setUser}) => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup setUser={setUser} />} />
        <Route path='/' element={user ? <Home user={user} /> : <Login setUser={setUser} />} />
      </Routes>
    </Router>
  )
};

export default AppRoutes;
