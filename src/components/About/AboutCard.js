import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

          Worked as a <span className="purple">Junior </span> Frontend Developer, contributing
          to the development of a  <span className="purple">CRM</span> system for a medical center. Focused on building <span className="purple">responsive</span> and user-friendly interfaces
          ,ensuring seamless
          integration with backend services, and 
           optimizing performance for an enhanced user experience. 
          <br />
          <br/>


            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
