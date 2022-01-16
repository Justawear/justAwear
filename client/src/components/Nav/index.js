import React, {Fragment, useState} from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import {Menu, Typography} from 'antd';

import Cart from '../Cart';


function Nav() {

  const [current, setCurrent] = useState(null);
  const handleClick = e => setCurrent(e.key);
  

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
      <Fragment>
          <Menu.Item key="/orderHistory">
              <Link to="/orderHistory">
                Order History
              </Link>
          </Menu.Item>
          <Menu.Item key="/logout">
          <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
          </Menu.Item>
          <Menu.Item key="cart">
            <Cart />
          </Menu.Item>
    </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Menu.Item key="/signup">
            <Link to="/signup">
              Signup
            </Link>
          </Menu.Item>
          <Menu.Item key="/login">
            <Link to={'/login'}>
                Login
            </Link>
          </Menu.Item>
          <Menu.Item key="cart">
            <Cart />
          </Menu.Item>
        </Fragment>
      );
    }
  }

  return (
    <Fragment>
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal"
    style={{position: "fixed", width: "100%", zIndex: "222"}}
    >
        <Menu.Item key="/"  style={{marginRight: "auto"}}>
          <Typography.Title level={3} style={{display: "inline-block", padding: "0 5px"}}>
            <Link to="/">
              Just a Wear.
            </Link>
          </Typography.Title>
        </Menu.Item>
        {showNavigation()}
    </Menu>
    </Fragment>
  );
}

export default Nav;