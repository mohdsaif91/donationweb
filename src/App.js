import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Components/Login";
import Admin from "./admincomponents/Admin";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* admin route */}
          <Route path="adminHome" element={<Admin />} />

          {/* rest route */}
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
