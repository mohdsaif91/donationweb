import React from "react";
import { Menu } from "antd";

import Logo from "../image/give.png";

function Navbar() {
  return (
    <div className="nav-bar-class">
      <div className="logo">
        <img src={Logo} className="logo-img" />
        <span className="logo-text">Zaka</span>
      </div>
      {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      /> */}
    </div>
  );
}

export default Navbar;
