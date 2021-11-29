import React from "react";
import { Badge, Card, CardGroup, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../../img/1.png";
import img2 from "../../../img/2.png";
import img3 from "../../../img/3.png";
// import Project from "../Project";

const Projects = () => {
  //   const [projects, setProjects] = useState([]);
  //   useEffect(() => {
  //     fetch("/projects.json")
  //       .then((res) => res.json())
  //       .then((data) => setProjects(data));
  //   }, []);
  return (
    <div className="container">
      <h1 className="text-center py-5 ">
        My <span>Projects</span>
      </h1>
      <Row xs={1} sm={1} md={2} lg={4} xl={4}>
        {/* {projects.map((project) => (
          <Col>
            <Project project={project}></Project>
          </Col>
        ))} */}
        <Col>
          <div data-aos="zoom-in-up" data-aos-offset="300">
            <CardGroup>
              <Card className="card-container text-center border-0">
                <Card.Body className="card-body pb-1">
                  <Card.Title className="card-title text-truncate">
                    Destination Inc.
                  </Card.Title>
                  <Card.Img variant="top" src={img1} />
                  <Card.Text
                    style={{
                      overflow: "hidden",
                      maxHeight: "4rem",
                      display: "block",
                      textOverflow: "ellipsis",
                    }}
                    className="card-info"
                  >
                    description
                  </Card.Text>

                  <Card.Text className="card-info">
                    <Badge
                      pill
                      bg="light"
                      className="px-3 py-2 me-2 badge-icon"
                      text="dark"
                    >
                      react
                    </Badge>
                    <Badge
                      pill
                      bg="light"
                      className="px-3 py-2 me-2 badge-icon"
                      text="dark"
                    >
                      nodeJs
                    </Badge>
                    <Badge
                      pill
                      bg="light"
                      className="px-3 py-2 me-2 badge-icon"
                      text="dark"
                    >
                      good boy
                      <small>
                        ft<sup>2</sup>
                      </small>
                    </Badge>
                  </Card.Text>

                  <Card.Title
                    style={{ color: "#377ef9", fontWeight: "bold" }}
                    className="card-title"
                  ></Card.Title>
                </Card.Body>
                <Card.Footer className="card-body border-0">
                  <Link to={""}>
                    <Button variant="dark" className="common-btn3 mb-3">
                      Detail
                    </Button>
                  </Link>

                  <Button variant="dark" className="common-btn3 mb-3 ms-lg-3">
                    Live Preview
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
        </Col>
        <Col>
          <div data-aos="zoom-in-up" data-aos-offset="300">
            <CardGroup>
              <Card className="card-container text-center border-0">
                <Card.Img variant="top" src={""} />
                <Card.Body className="card-body pb-1">
                  <Card.Title className="card-title text-truncate">
                    Travelers'
                  </Card.Title>
                  <Card.Img variant="top" src={img2} />
                  <Card.Text
                    style={{
                      overflow: "hidden",
                      maxHeight: "4rem",
                      display: "block",
                      textOverflow: "ellipsis",
                    }}
                    className="card-info"
                  >
                    description
                  </Card.Text>

                  <Card.Text className="card-info">
                    <Badge
                      pill
                      bg="light"
                      className="px-3 py-2 me-2 badge-icon"
                      text="dark"
                    >
                      react
                    </Badge>
                    <Badge
                      pill
                      bg="light"
                      className="px-3 py-2 me-2 badge-icon"
                      text="dark"
                    >
                      nodeJs
                    </Badge>
                    <Badge
                      pill
                      bg="light"
                      className="px-3 py-2 me-2 badge-icon"
                      text="dark"
                    >
                      good boy
                      <small>
                        ft<sup>2</sup>
                      </small>
                    </Badge>
                  </Card.Text>

                  <Card.Title
                    style={{ color: "#377ef9", fontWeight: "bold" }}
                    className="card-title"
                  ></Card.Title>
                </Card.Body>
                <Card.Footer className="card-body border-0">
                  <Link to={""}>
                    <Button variant="dark" className="common-btn3 mb-3">
                      Detail
                    </Button>
                  </Link>

                  <Button variant="dark" className="common-btn3 mb-3 ms-lg-3">
                    Live Preview
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
        </Col>
        <Col>
          <div data-aos="zoom-in-up" data-aos-offset="300">
            <CardGroup>
              <Card className="card-container text-center border-0">
                <Card.Body className="card-body pb-1">
                  <Card.Title className="card-title text-truncate">
                    Delta Care Hospital
                  </Card.Title>
                  <Card.Img variant="top" src={img3} />
                  <Card.Text
                    style={{
                      overflow: "hidden",
                      maxHeight: "4rem",
                      display: "block",
                      textOverflow: "ellipsis",
                    }}
                    className="card-info"
                  >
                    description
                  </Card.Text>

                  <Card.Text className="card-info">
                    <Badge
                      pill
                      bg="light"
                      className="px-3 py-2 me-2 badge-icon"
                      text="dark"
                    >
                      react
                    </Badge>
                    <Badge
                      pill
                      bg="light"
                      className="px-3 py-2 me-2 badge-icon"
                      text="dark"
                    >
                      nodeJs
                    </Badge>
                    <Badge
                      pill
                      bg="light"
                      className="px-3 py-2 me-2 badge-icon"
                      text="dark"
                    >
                      good boy
                      <small>
                        ft<sup>2</sup>
                      </small>
                    </Badge>
                  </Card.Text>

                  <Card.Title
                    style={{ color: "#377ef9", fontWeight: "bold" }}
                    className="card-title"
                  ></Card.Title>
                </Card.Body>
                <Card.Footer className="card-body border-0">
                  <Link to={""}>
                    <Button variant="dark" className="common-btn3 mb-3">
                      Detail
                    </Button>
                  </Link>

                  <Button variant="dark" className="common-btn3 mb-3 ms-lg-3">
                    Live Preview
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
        </Col>
        <Col>
          <div data-aos="zoom-in-up" data-aos-offset="300">
            <CardGroup>
              <Card className="card-container text-center border-0">
                <Card.Img variant="top" src={""} />
                <Card.Body className="card-body pb-1">
                  <Card.Title className="card-title text-truncate">
                    Travelers'
                  </Card.Title>
                  <Card.Img variant="top" src={img3} />
                  <Card.Text
                    style={{
                      overflow: "hidden",
                      maxHeight: "4rem",
                      display: "block",
                      textOverflow: "ellipsis",
                    }}
                    className="card-info"
                  >
                    description
                  </Card.Text>

                  <Card.Text className="card-info">
                    <Badge
                      pill
                      bg="light"
                      className="px-3 py-2 me-2 badge-icon"
                      text="dark"
                    >
                      react
                    </Badge>
                    <Badge
                      pill
                      bg="light"
                      className="px-3 py-2 me-2 badge-icon"
                      text="dark"
                    >
                      nodeJs
                    </Badge>
                    <Badge
                      pill
                      bg="light"
                      className="px-3 py-2 me-2 badge-icon"
                      text="dark"
                    >
                      good boy
                      <small>
                        ft<sup>2</sup>
                      </small>
                    </Badge>
                  </Card.Text>

                  <Card.Title
                    style={{ color: "#377ef9", fontWeight: "bold" }}
                    className="card-title"
                  ></Card.Title>
                </Card.Body>
                <Card.Footer className="card-body border-0">
                  <Link to={""}>
                    <Button variant="dark" className="common-btn3 mb-3">
                      Detail
                    </Button>
                  </Link>

                  <Button variant="dark" className="common-btn3 mb-3 ms-lg-3">
                    Live Preview
                  </Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
