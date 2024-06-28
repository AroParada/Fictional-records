import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <Nav fill variant="tabs">
      <Nav.Item>
        <NavLink to="/"> Home</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/Shop">Shop</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/Login">Login</NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
