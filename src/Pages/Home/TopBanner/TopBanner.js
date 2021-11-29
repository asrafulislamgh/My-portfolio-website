import React from "react";
import "./TopBanner.css";
import profilePhoto from "../../../img/Profile-pic.png";
import { Button, Col, Container, Row } from "react-bootstrap";

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
          <Col>
            <div>
              <p>Hi there, I'm</p>
              <h1>Asraful Islam</h1>
              <h4>A Junior MERN Stack Developer</h4>
              <Button className="mt-4">Contact Now</Button>
            </div>
          </Col>
          <Col>
            <div>
              <img className="w-75" src={profilePhoto} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBanner;
