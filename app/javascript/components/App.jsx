import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../routes";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <AppRoutes user={user} setUser={setUser} />
  );
}

export default App;
