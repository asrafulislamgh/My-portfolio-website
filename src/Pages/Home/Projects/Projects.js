import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Project from "../Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="projects" className="container">
      <div className="text-center py-5 text-white">
        <h1 className=" ">
          My <span className="spanText">Projects</span>
        </h1>
        <p>Here are a few design projects I've worked on recently.</p>
      </div>
      <Row xs={1} sm={1} md={2} lg={3} xl={3} className="gy-4">
        {projects.map((project) => (
          <Col>
            <Project project={project}></Project>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
