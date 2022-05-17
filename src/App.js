import React from "react";
import "./App.scss";
import { Link, Switch, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Logout from "./Components/Logout";

const App = () => {
  return (
    <>
      <div className="App">
        <Login />
        {/* <Admin />
      <Logout /> */}
        {/* <Login /> */}
        {/* <Switch> */}
        {/* <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="admin" element={<Admin />} />
        <Route path="logout" element={<Logout />} />
      </Routes> */}
        {/* </Switch> */}
        <h1>hello world</h1>
      </div>
    </>
  );
};

export default App;
