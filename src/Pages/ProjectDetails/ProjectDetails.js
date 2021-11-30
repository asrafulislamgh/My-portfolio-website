import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import Slider from "react-slick";

const ProjectDetails = () => {
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProject = data.find((item) => item.id === parseInt(id));
        setProject(selectedProject);
      });
  }, [id]);

  useEffect(() => {
    setNav2(slider2.current);
  }, []);

  return (
    <Container>
      <div className="text-white py-5 my-5 px-2 ">
        <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-4 my-5">
          <Col
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            {/* <img src={project.img} alt="" /> */}

            <div style={{ width: "90%" }}>
              <div>
                <Slider asNavFor={nav2} ref={slider1}>
                  {project?.img?.map((image) => (
                    <img src={image} alt="" />
                  ))}
                </Slider>
              </div>
            </div>
          </Col>
          <Col
            className="px-1"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <h1 className="">{project.name}</h1>
            <p>{project.description}</p>
            <p>Tools: {project.tools}</p>
            <a target="_blank" rel="noreferrer" href={project.gitClient}>
              <Button variant="dark" className="common-btn3 mb-3">
                Github Client
              </Button>
            </a>
            {project.gitServer && (
              <a target="_blank" rel="noreferrer" href={project.gitServer}>
                <Button variant="dark" className="common-btn3 mb-3 ms-lg-3">
                  Github Server
                </Button>
              </a>
            )}
            <a target="_blank" rel="noreferrer" href={project.link}>
              <Button variant="dark" className="common-btn3 mb-3 ms-lg-3">
                Live Preview
              </Button>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ProjectDetails;
