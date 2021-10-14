import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";
import { FaLinkedinIn } from "react-icons/fa";
import TransitionsModal from "../Modal/ContactModal.jsx";
function Home2() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" data-aos="fade-right">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              I fell in love with programming when I was in college and that motivated me to pursue my career as a full stack web developer.
              
              I am fluent in classics like
              <i>
                <b className="purple"> Javascript. </b>
              </i>
               My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> 
                {/* and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b> */}
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b>
              </i>

              I have an unending desire to learn and am thrilled to start working on real projects soon.
              
            </p>
          </Col>
          <Col
            md={4}
            className="myAvtar"
            data-aos="fade-down"
            style={{ marginTop: "-32px" }}
          >
            <Tilt>
              <img
                src="https://qtcinfotech.com/images/web-development/cms-website-development-service.gif"
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" data-aos="fade-up">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/asutoshb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/asutoshbehera5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/asutosh-behera-491908190/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <h3>
              Contact No:
              <p
                href="tel:+7978707771"
                style={{
                  color: "#f0195a",
                }}
              >
                +917978707771
              </p>
            </h3>
            
            <h3>
              Email:
              <p
                href="tel:+7978707771"
                style={{
                  color: "#f0195a",
                }}
              >
                beheraasutosh132@gmail.com
              </p>
            </h3>
            <br /> <br />
            <TransitionsModal />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;