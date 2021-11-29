import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div style={{ marginBottom: "50px", textAlign: "center" }}>
      <>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light">
          <Container container>
            <Navbar.Brand>Asraful Islam</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link
                  as={NavLink}
                  activeStyle={{ color: "#fff" }}
                  to="/home"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  to="/projects"
                  as={NavLink}
                  activeStyle={{ color: "#fff" }}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  to="/contact"
                  as={NavLink}
                  activeStyle={{ color: "#fff" }}
                >
                  Contact
                </Nav.Link>
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
