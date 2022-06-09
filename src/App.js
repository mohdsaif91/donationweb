import Login from "./Components/Login";
import Home from "./Components/Home";
import Donate from "./Components/Donate";
import AdNavbar from "./admincomponents/AdNavbar";
import OurNgos from "./Components/OurNgos";
import Navbar from "./Components/Navbar";

import "./App.scss";

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { useSelector } from "react-redux";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const adminData = useSelector((state) => state.admin);

  return (
    <Layout>
      <Header className="header">
        <Navbar />
      </Header>
      <Layout hasSider={adminData.adminState.adminLogin}>
        {adminData.adminState.adminLogin && (
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={200}
            className="site-layout-background"
          >
            <AdNavbar />
          </Sider>
        )}
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              margin: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              {/* admin route */}
              <Route path="donate" element={<Donate />} />
              <Route path="ourngos" element={<OurNgos />} />
              <Route path="adminHome" element={<Home />} />

              {/* rest route */}
              <Route path="/" element={<Login />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>

      {!adminData.adminState.adminLogin && <Footer></Footer>}
    </Layout>
  );
};

export default App;
