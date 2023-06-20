import React, { useState } from "react";
import AppRoutes from "../routes";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));

  return (
    <>
      <Router>
        <Header setUser={setUser} user={user} />
        <AppRoutes user={user} setUser={setUser} />
      </Router>
    </>
  );
}

export default App;
