// import React from "react";

// import { Badge, Card, CardGroup, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Project = ({ project }) => {
//   const { name, img, link } = project;
//   return (
//     <div>
//       <div data-aos="zoom-in-up" data-aos-offset="300">
//         <CardGroup>
//           <Card className="card-container text-center border-0">
//             <Card.Img variant="top" src={""} />
//             <Card.Body className="card-body pb-1">
//               <Card.Title className="card-title text-truncate">
//                 {name}
//               </Card.Title>
//               <Card.Img variant="top" src={img} />
//               <Card.Text
//                 style={{
//                   overflow: "hidden",
//                   maxHeight: "4rem",
//                   display: "block",
//                   textOverflow: "ellipsis",
//                 }}
//                 className="card-info"
//               >
//                 description
//               </Card.Text>

//               <Card.Text className="card-info">
//                 <Badge
//                   pill
//                   bg="light"
//                   className="px-3 py-2 me-2 badge-icon"
//                   text="dark"
//                 >
//                   react
//                 </Badge>
//                 <Badge
//                   pill
//                   bg="light"
//                   className="px-3 py-2 me-2 badge-icon"
//                   text="dark"
//                 >
//                   nodeJs
//                 </Badge>
//                 <Badge
//                   pill
//                   bg="light"
//                   className="px-3 py-2 me-2 badge-icon"
//                   text="dark"
//                 >
//                   good boy
//                   <small>
//                     ft<sup>2</sup>
//                   </small>
//                 </Badge>
//               </Card.Text>

//               <Card.Title
//                 style={{ color: "#377ef9", fontWeight: "bold" }}
//                 className="card-title"
//               ></Card.Title>
//             </Card.Body>
//             <Card.Footer className="card-body border-0">
//               <Link to={""}>
//                 <Button variant="dark" className="common-btn3 mb-3">
//                   Detail
//                 </Button>
//               </Link>
//               <Link to={{ pathname: link }} target="_blank">
//                 <Button variant="dark" className="common-btn3 mb-3 ms-lg-3">
//                   Live Preview
//                 </Button>
//               </Link>
//             </Card.Footer>
//           </Card>
//         </CardGroup>
//       </div>
//     </div>
//   );
// };

// export default Project;
