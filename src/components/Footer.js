import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Vladimir Levitskiy</h3>
        </Col>
        <Col md="4" className="footer-m">
     
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://mailto:vova123555@gmail.com"
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noopener noreferrer"
                >
                  <AiFillGoogleCircle />
                </a>
              </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/volodymyr-levytskyi-a281b5185"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
