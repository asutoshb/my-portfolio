import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Medium from "../../Assets/Projects/Medium.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
import Frontend from "../../Assets/Projects/Frontend.png";
import Grocery from "../../Assets/Projects/Grocery.png";
// import suicide from "../../Assets/Projects/suicide.png";
import Tictac from "../../Assets/Projects/Tictac.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Medium}
              isBlog={false}
              title="Medium Clone "
              description="Medium is an American blog website where users can read blogs written by people around the world and can write their blog as well"
              link="https://github.com/shivam-singh-au17/ProjectMediumClone"
              linkmedium="https://asutoshblog.hashnode.dev/medium-clone"
              linklive="https://youtu.be/Guw7SuBP0VY"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={Frontend}
              isBlog={false}
              title="Frontend masters Clone"
              description="Frontend masters is an E-learning platform which provides frontend courses available in the market to its users"
              link="https://github.com/asutoshb/Frontend-Masters"
              linkmedium="https://asutoshblog.hashnode.dev/frontend-masters-clone-using-mongodb-database"
              linklive="https://youtu.be/pv39dRyC_o0"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={Grocery}
              isBlog={false}
              title="Grocery App"
              description="A simple grocery management application for users"
              link="https://github.com/asutoshb/grocery-store"
              linkmedium=""
              linklive="https://asutoshb.github.io/grocery-store/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Tictac}
              isBlog={false}
              title="Tic tac Toe Game"
              description="A simple tic-tac-toe game where users can play the game and see their history of moves as well"
              link="https://github.com/asutoshb/Tic-Tac-Toe-react"
              linkmedium="#"
              linklive="https://asutoshb.github.io/Tic-Tac-Toe-react/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;