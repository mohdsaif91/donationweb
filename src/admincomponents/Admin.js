import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1>This is an Admin page.</h1>
      <Link to="/">Logout</Link>
    </div>
  );
}

export default Admin;
