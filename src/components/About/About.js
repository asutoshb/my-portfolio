import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container fluid>
       
        <h1 className="project-heading" data-aos="fade-up">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <br /> <br />
        <div data-aos="fade-down">
          <Techstack />
        </div>
        <br />
        <h1 className="project-heading" data-aos="fade-up">
          Professional <strong className="purple">Toolset </strong>
        </h1>
        <br />
        <div data-aos="fade-up">
          <Toolstack />
        </div>
      </Container>
    </Container>
  );
}

export default About;