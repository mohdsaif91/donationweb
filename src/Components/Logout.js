import React from "react";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div>
      <h1>you have been logged out!!</h1>
      <button>Logout</button>
      <Link to="/">Login Again</Link>
    </div>
  );
}
