import * as React from "react";
import { Input, Space, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface IHearderProps {
  toggle: () => void;
}

const Header: React.FC<IHearderProps> = ({ toggle }) => {
  const { Search } = Input;
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="header">
      <div className="header-left">
        <a className="header-brand" href="#">
          <img src="/assets/img/logo.png" alt="" />
        </a>
        <div className="header-icon" onClick={toggle}>
          <i className="fas fa-align-justify" style={{ fontSize: "20px" }}></i>
        </div>
      </div>
      <div className="header-right">
        <Space direction="vertical" className="header-search">
          <Search placeholder="input search text" style={{ width: 200 }} />
        </Space>
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Admin <DownOutlined />
          </a>
        </Dropdown>
        <div className="header-icon" onClick={toggle}>
          <i className="fas fa-align-justify" style={{ fontSize: "20px" }}></i>
        </div>
      </div>
    </div>
  );
};
export default Header;
