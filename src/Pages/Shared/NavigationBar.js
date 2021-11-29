import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div style={{ marginBottom: "50px", textAlign: "center" }}>
      <>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light">
          <Container container>
            <Navbar.Brand href="#">Asraful Islam</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Projects</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
              </Nav>
              <Button className="ms-lg-4">Download Resume</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default NavigationBar;
