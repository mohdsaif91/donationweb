import React from "react";
// import { BrowserRouter, Link, Routes } from "react-router-dom";
import "./Admin.scss";

import { Layout } from "antd";
import AdNavbar from "../admincomponents/AdNavbar";
import Home from "../Components/Home";
const { Header, Content, Footer } = Layout;

function Admin() {
  return (
    <>
      <Layout className="mainlayout">
        <Header>
          <AdNavbar />
          <h1>This is an Admin page.</h1>
          {/* <Home /> */}
        </Header>
      </Layout>
    </>
  );
}

export default Admin;
