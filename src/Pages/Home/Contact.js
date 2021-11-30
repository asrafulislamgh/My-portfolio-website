import React from "react";
import { Col, Form, FormControl, Row, Button } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import "./Contact.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_w2av1j7",
        "template_dew2i45",
        e.target,
        "user_HzUal2GBY3Az5i7awAR3Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire(
            "Good job!",
            "Thank you for conatacting me. I will response you in a asap.",
            "success"
          );
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="contact-bg"
      style={{ marginTop: "150px", backgroundColor: "#ccc" }}
    >
      <div className="innerInfo container">
        <div className="text-center py-5">
          <h1 className=" text-white">
            <span className="spanText">Contact</span> Me
          </h1>
          <p className="subText">
            Contact me anytime you need. I am will be there for you.
          </p>
        </div>
        <Row
          data-aos="fade-up"
          data-aos-offset="300"
          className="d-flex justify-content-center"
        >
          <Col className="text-white">
            <h4>Email:</h4>
            <p>dev.asrafulislam@gmail.com</p>
            <h4>Phone:</h4>
            <p>+880 1930 336602</p>
            <h4>Facebook:</h4>
            <p>https://www.facebook.com/asraful.tanju</p>
            <h4>Skype:</h4>
            <p>asraful.mamun</p>
          </Col>
          <Col
            data-aos="fade-up"
            data-aos-offset="300"
            style={{ maxWidth: "90%" }}
          >
            <Form onSubmit={sendEmail}>
              <FormControl
                className="input-field mb-3"
                placeholder="Name"
                name="name"
                aria-describedby="basic-addon2"
              />
              <FormControl
                className="input-field mb-3"
                placeholder="Email"
                name="email"
                type="email"
                aria-describedby="basic-addon2"
              />

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  className="input-field mb-3"
                  placeholder="Your message"
                />
              </Form.Group>
              <div className="d-grid">
                <Button
                  variant="dark"
                  type="submit"
                  className="btn common-btn3 py-3 mb-5"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
