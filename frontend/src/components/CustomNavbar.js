import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">Animys</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
