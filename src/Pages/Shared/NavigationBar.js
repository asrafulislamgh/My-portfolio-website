import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import { HashLink } from "react-router-hash-link";

const NavigationBar = () => {
  return (
    <div
      style={{
        marginBottom: "50px",
        textAlign: "center",
      }}
    >
      <>
        <Navbar
          variant="dark"
          fixed="top"
          collapseOnSelect
          expand="lg"
          className="text-white navigationContainer"
        >
          <Container container>
            <Navbar.Brand style={{ fontWeight: "bold" }}>
              <span className="spanText">&lt;/&gt;</span> Asraful Islam{" "}
            </Navbar.Brand>
            <Navbar.Toggle
              className="text-white"
              aria-controls="navbarScroll"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link
                  as={HashLink}
                  activeStyle={{ color: "#fff" }}
                  to="/home#home"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  to="/about#about"
                  as={HashLink}
                  activeStyle={{ color: "#fff" }}
                >
                  About Me
                </Nav.Link>
                <Nav.Link
                  to="/home#projects"
                  as={HashLink}
                  activeStyle={{ color: "#fff" }}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  to="/blogs"
                  as={NavLink}
                  activeStyle={{ color: "#fff" }}
                >
                  Blogs
                </Nav.Link>
                <Nav.Link
                  to="/home#contact"
                  as={HashLink}
                  activeStyle={{ color: "#fff" }}
                >
                  Contact Me
                </Nav.Link>
              </Nav>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1wShYOPfnvkuzsrPFeKYY_MBHG50Mmpxy/view?usp=sharing"
              >
                <Button className="btn common-btn ms-lg-4">
                  Download Resume
                </Button>
              </a>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default NavigationBar;
