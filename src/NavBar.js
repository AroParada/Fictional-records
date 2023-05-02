import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
      <Nav fill variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href="/Shop">
            Shop
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Login">Login</Nav.Link>
        </Nav.Item>
      </Nav>
    );
}

export default Navbar;