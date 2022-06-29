import "./App.scss";

import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { useSelector } from "react-redux";

const Login = React.lazy(() => import("./Components/Login"));
const Home = React.lazy(() => import("./Components/Home"));
const CreateDonation = React.lazy(() =>
  import("./admincomponents/Donation/DonationRegister")
);
const DonationList = React.lazy(() =>
  import("./admincomponents/Donation/DonationList/DonationList")
);
const AdNavbar = React.lazy(() => import("./admincomponents/AdNavbar"));
const OurNgos = React.lazy(() => import("./Components/OurNgos"));
const Navbar = React.lazy(() => import("./Components/Navbar"));

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const adminData = useSelector((state) => state.admin);

  return (
    <Layout>
      <Header className="main-header">
        <Suspense fallback={<div>Loading</div>}>
          <Navbar />
        </Suspense>
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
            height: "100vh",
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
              <Route
                path="createDonation"
                element={
                  <Suspense fallback={<div>Loading</div>}>
                    <CreateDonation />
                  </Suspense>
                }
              />
              <Route
                path="donationList"
                element={
                  <Suspense fallback={<div>Loading</div>}>
                    <DonationList />
                  </Suspense>
                }
              />
              <Route
                path="ourngos"
                element={
                  <Suspense fallback={<div>Loading</div>}>
                    <OurNgos />
                  </Suspense>
                }
              />
              <Route
                path="adminHome"
                element={
                  <Suspense fallback={<div>Loading</div>}>
                    <Home />
                  </Suspense>
                }
              />

              {/* rest route */}
              <Route
                path="/"
                element={
                  <Suspense fallback={<div>Loading</div>}>
                    <Login />
                  </Suspense>
                }
              />
            </Routes>
          </Content>
        </Layout>
      </Layout>

      {!adminData.adminState.adminLogin && <Footer></Footer>}
    </Layout>
  );
};

export default App;
