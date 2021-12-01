import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ project }) => {
  const { id, subtext, img, link, tools } = project;
  return (
    <div>
      <div data-aos="zoom-in-up" data-aos-offset="300">
        <div className="project-container">
          <img className="project-img img-fluid" src={img} alt="" />
          <div className="project-info text-center d-flex justify-center align-items-center">
            <div className="">
              <p>{subtext}</p>
              <p>
                <small className="subText">{tools}</small>
              </p>
              <Link to={`/${id}`}>
                <Button variant="dark" className="common-btn mb-3">
                  Detail
                </Button>
              </Link>
              <a href={link} rel="noreferrer" target="_blank">
                <Button variant="dark" className="common-btn mb-3 ms-lg-3">
                  Live Preview
                </Button>
              </a>
            </div>
          </div>
        </div>
        {/* <CardGroup>
          <Card className="card-container text-center border-0">
            <Card.Img variant="top" src={""} />
            <Card.Body className="card-body pb-1">
              <Card.Img variant="top" src={img} />
              <Card.Title className="my-3 card-title text-truncate">
                {name}
              </Card.Title>
              <Card.Text
                style={{
                  overflow: "hidden",
                  maxHeight: "5rem",
                  display: "block",
                  textOverflow: "ellipsis",
                }}
                className="card-info"
              >
                {subtext}
              </Card.Text>

              <Card.Text className="card-info">
                <small className="px-3 py-2 me-2 badge-icon">{tools}</small>
              </Card.Text>

              <Card.Title
                style={{ color: "#377ef9", fontWeight: "bold" }}
                className="card-title"
              ></Card.Title>
            </Card.Body>
            <Card.Footer className="card-body border-0">
              <Link to={`/${id}`}>
                <Button variant="dark" className="common-btn mb-3">
                  Detail
                </Button>
              </Link>
              <a href={link} rel="noreferrer" target="_blank">
                <Button variant="dark" className="common-btn mb-3 ms-lg-3">
                  Live Preview
                </Button>
              </a>
            </Card.Footer>
          </Card>
        </CardGroup> */}
      </div>
    </div>
  );
};

export default Project;
