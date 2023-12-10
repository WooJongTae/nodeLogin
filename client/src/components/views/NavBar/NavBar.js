import React from "react";
import { Outlet } from "react-router-dom";
import { Button, Space, DatePicker, version } from "antd";
function NavBar() {
  return (
    <div>
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
      NavBar
      <Outlet />
    </div>
  );
}

export default NavBar;
