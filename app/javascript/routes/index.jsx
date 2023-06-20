import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Signup from "../components/user/Signup";
import Login from "../components/user/Login";
import CreateReferral from "../components/referral/CreateReferral";

const AppRoutes = ({user, setUser}) => {
  return (
    <Routes>
      <Route path='/login' element={<Login setUser={setUser} user={user}/>} />
      <Route path='/signup' element={<Signup setUser={setUser} user={user} />} />
      {user ? (
        <>
          <Route path='/send_referral' element={<CreateReferral />} />
          <Route path='/' element={<Home user={user} />} />
        </>
      ) :
      (
        <>
          <Route path='/' element={<Login setUser={setUser} user={user}/>} />
          <Route path='/signup' element={<Signup setUser={setUser} user={user} />} />
        </>
      )}
    </Routes>
  )
};

export default AppRoutes;
