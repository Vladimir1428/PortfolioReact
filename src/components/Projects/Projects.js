import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agencyclientmanager from "../../Assets/Projects/agencyclientmanager.png";
import angularPortfolio from "../../Assets/Projects/angularPortfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={angularPortfolio}
              isBlog={false}
              title="Angular Portfolio Website"
              description=" Personal portfolio project utilizing Angular, TypeScript, RxJS, andAngular animations         ."
              ghLink="https://github.com/Vladimir1428/Angular-Portfolio"
              demoLink="https://angularportfolio20.netlify.app/"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={agencyclientmanager}
              isBlog={false}
              title="Agency client manager"
              description="Developed a dynamic and responsive client management dashboard using React and Redux Toolkit for seamless state management. Integrated Ant Design for a modern, intuitive UI, and utilized the react-drag-listview library to implement draggable table columns, allowing users to customize their data views with ease.."
              ghLink="https://github.com/Vladimir1428/Vladimir1428.github.io"
              demoLink="https://Vladimir1428.github.io"
            />
          </Col>
          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
