import React from "react";
import "./TopBanner.css";
import profilePhoto from "../../../img/Profile-pic.png";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const TopBanner = () => {
  return (
    <div className=" banner-background d-flex align-items-center">
      <Container>
        <Row
          xs={1}
          sm={1}
          md={2}
          lg={2}
          xl={2}
          className="text-center gy-5 d-flex justify-content-between align-items-center"
        >
          <Col data-aos="fade-right" data-aos-offset="300">
            <div style={{ borderRadius: "20px" }} className="banner-text">
              <p>Hi there, I'm</p>
              <h1 className="display-3 fw-bold">
                <span className="spanText">Asraful </span>Islam
              </h1>
              <h4>A Junior MERN Stack Developer</h4>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/asrafulislamgh"
                >
                  <i className="icons me-3 fab fa-github"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/asraful.tanju"
                >
                  <i className="icons me-3 fab fa-linkedin"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/asrafulislamgh"
                >
                  <i className="icons me-3 fab fa-facebook"></i>
                </a>
              </div>
              <Nav.Link
                to="/home#contact"
                as={HashLink}
                activeStyle={{ color: "#ff9800" }}
              >
                <Button className="common-btn mt-3">Contact Now</Button>
              </Nav.Link>
            </div>
          </Col>
          <Col data-aos="fade-left" data-aos-offset="300">
            <div>
              <img
                style={{ borderRadius: "50%", border: "10px solid #ff9800" }}
                className="img-fluid"
                src={profilePhoto}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBanner;
