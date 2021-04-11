import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useStore } from "../Store/Store";

export default function Navigation(props) {
  const user = useStore((state) => state.user);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>App Name</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link to="/">Home</Nav.Link>

        <Nav.Link to="/landing">Landing</Nav.Link>

        <Nav.Link to="/profile">Profile</Nav.Link>
        <Nav.Link to="/">Sign Out</Nav.Link>
      </Nav>
    </Navbar>
  );
}
