import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import photo from "../../img/Profile-pic.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <Container id="about" className="pt-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col xl={4} lg={4} md={5} sm={5} xs={8}>
            <div className="text-center mb-3 text-white">
              <img
                className="doctor-img my-3"
                style={{ width: "200px" }}
                src={photo}
                alt=""
              />
              <h2>Asraful Islam</h2>
              <p className="subText">Junior Web Developer</p>
            </div>
          </Col>
        </Row>
        <div
          style={{
            backgroundColor: "#484768",
            padding: "40px",
            borderRadius: "20px",
          }}
          className="text-center text-white mt-5"
        >
          <h2>
            Hi, I’m <span className="spanText">Asraful</span>. Nice to meet you.
          </h2>
          <p className="subText2">
            Since beginning of my understanding about web development, I have
            always been passionate about web development, which led me to pursue
            a Bachelor of Computer Science degree. I am constantly seeking out
            new technologies and stay up-to-date on trends in the industry. I'm
            quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/asrafulislamgh"
            >
              <i className="icons2 me-3 fab fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/asraful.tanju"
            >
              <i className="icons2 me-3 fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/asrafulislamgh"
            >
              <i className="icons2 me-3 fab fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="text-white pt-5 mt-5">
          <Row xs={1} sm={1} md={1} lg={2} xl={2}>
            <Col
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <img src={""} alt="" />
            </Col>
          </Row>
        </div>
        <div className="text-center mb-3 text-white mb-5 pb-5">
          <div>
            <h2>
              My <span className="spanText">Education</span>
            </h2>
            <p className="subText mb-5">
              My passion drived me to get a higher education is that track
            </p>
          </div>
          <Row>
            <Col>
              <h4>Graduation</h4>
              <h5>Bsc in Computer Science and Engineering (CSE)</h5>
              <p>Green University of Bangladesh</p>
              <p>GPA 3.80 out of 4.00</p>
            </Col>
            <Col>
              <h4>Diploma Engineering</h4>
              <h5>Diploma in Graphic Design</h5>
              <p>Green University of Bangladesh</p>
              <p>GPA 3.47 out of 4.00</p>
            </Col>
            <Col>
              <h4>Secondary School Certificate (SSC)</h4>
              <h5>Department of Business Studies</h5>
              <p>Madartek Hight School</p>
              <p>GPA 5.00 out of 5.00</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
