import { Menu } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  HomeOutlined,
  DollarCircleOutlined,
  GroupOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import { logoutAdmin } from "../RTK/Slice/adminSlice";

import "./AdNavbar.scss";

function AdNavbar() {
  const [activeHam, setActiveHam] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    console.log("hi");
    sessionStorage.removeItem("adminData");
    dispatch(logoutAdmin());
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["/adminhome"]}>
        <Menu.Item key="/adminhome">
          <Link to="/adminhome">
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/donate">
          <Link to="/donate">
            <DollarCircleOutlined />
            <span className="nav-text">Donate</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/ourngos">
          <Link to="/ourngos">
            <GroupOutlined />
            <span className="nav-text">Our NGOS</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/logout" onClick={logoutUser}>
          <LoginOutlined />
          <span className="nav-text">Logout</span>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
}
export default AdNavbar;
