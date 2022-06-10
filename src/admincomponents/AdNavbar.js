import { Menu } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  EyeOutlined,
  EditOutlined,
  HomeOutlined,
  DollarCircleOutlined,
  GroupOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import { logoutAdmin } from "../RTK/Slice/adminSlice";

import "./AdNavbar.scss";

const { SubMenu } = Menu;

function AdNavbar() {
  const [activeHam, setActiveHam] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
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
        <SubMenu icon={<DollarCircleOutlined />} title="Donation">
          <Menu.Item key="/createDonation">
            <Link to="/createDonation">
              <EditOutlined />
              <span className="nav-text">Create Donation</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/donationList">
            <Link to="/donationList">
              <EyeOutlined />
              <span className="nav-text">Donation List</span>
            </Link>
          </Menu.Item>
        </SubMenu>
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
