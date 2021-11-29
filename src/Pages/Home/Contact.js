import React from "react";
import { Col, Form, FormControl, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <div style={{ marginTop: "150px", backgroundColor: "#ccc" }}>
      <h1 className="text-center py-5 ">
        <span>Contact</span> Me
      </h1>
      <Row className="d-flex justify-content-center text-center">
        <Col style={{ maxWidth: "400px" }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              {...register("name", { required: true })}
              className="input-field mb-3"
              placeholder="Name"
              aria-label="name"
              aria-describedby="basic-addon2"
            />
            <FormControl
              {...register("email", { required: true })}
              className="input-field mb-3"
              placeholder="Email"
              aria-label="email"
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
                {...register("description")}
                as="textarea"
                rows={4}
                className="input-field mb-3"
                placeholder="Your message"
              />
            </Form.Group>
            {errors.exampleRequired && <span>This field is required</span>}
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
  );
};

export default Contact;
