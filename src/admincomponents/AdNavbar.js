import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Home from "../Components/Home";
import { logoutAdmin } from "../RTK/Slice/adminSlice";

import "./AdNavbar.scss";

function AdNavbar() {
  const [activeHam, setActiveHam] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    sessionStorage.removeItem("adminData");
    dispatch(logoutAdmin());
    navigate("/");
  };

  const menuItems = (
    <>
      <a href="#">
        <NavLink to="/home">Home</NavLink>
      </a>
      <a href="#">
        <Link to="/donate">Donate</Link>
      </a>
      <a href="#">
        <Link to="/ourngos">Our NGOS</Link>
      </a>
      {/* <a href="#">Contact</a> */}
      <a href="#" onClick={logoutUser()}>
        Logout
      </a>

      {/* <ul>
      
        <li className="nav-list">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/donate">Donate</NavLink>
        </li>
        <li>
          <NavLink to="/our ngos">Our NGOS</NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/">Logout</NavLink>
        </li>
      </ul> */}
    </>
  );
  return (
    <div className="navbar-container">
      <nav>
        <div className="nav-container">
          <h1 className="nav-brand">Donation-Web</h1>
          <div className="menu">{menuItems}</div>
          <button
            className={activeHam ? "hamburger active-hamburger" : "hamburger"}
            onClick={() => setActiveHam(!activeHam)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      {activeHam && <div className="nav-dropdown">{menuItems}</div>}
    </div>
  );
}
export default AdNavbar;
