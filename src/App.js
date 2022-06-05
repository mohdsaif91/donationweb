import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Components/Login";
import Admin from "./admincomponents/Admin";

import "./App.scss";
import Home from "./Components/Home";
import Donate from "./Components/Donate";
import { Layout } from "antd";
import AdNavbar from "./admincomponents/AdNavbar";
import OurNgos from "./Components/OurNgos";
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <>
      <Layout>
        {/* <Header>
        </Header> */}
        <Content>
          <div className="App">
            <BrowserRouter>
              {/* <AdNavbar /> */}
              <Routes>
                {/* admin route */}
                <Route exact path="home" element={<Home />} />
                <Route path="donate" element={<Donate />} />
                <Route path="ourngos" element={<OurNgos />} />

                <Route path="adminHome" element={<Admin />} />

                {/* rest route */}
                <Route path="/" element={<Login />} />
              </Routes>
            </BrowserRouter>
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default App;
