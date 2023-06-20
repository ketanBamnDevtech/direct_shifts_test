import React, { useState } from "react";
import AppRoutes from "../routes";

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));

  return (
    <AppRoutes user={user} setUser={setUser} />
  );
}

export default App;
