import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home2.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            ABOUT  <span className="purple"> ME </span> 
            </h1>
            <p className="home-about-body">
            I have <span style={{ bottom: "10px", alignContent: "center" }}>1. 5+</span> years of commercial experience in web development, working with <b className="purple">
              React, Angular, TypeScript, RxJS, and JavaScript</b>.
              <br />
              <br />
              Additionally, I have experience in backend development with <b className="purple">Node.js, Express, and Nest</b>, allowing me to build full-stack applications.

              </p>
              <p className="home-about-body">
I am passionate about creating innovative web products, focusing on both frontend and backend development, while continuously exploring new tools and frameworks to improve my work.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1> */}
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Vladimir1428"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mailto:vova123555@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGoogleCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/volodymyr-levytskyi-a281b5185"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
