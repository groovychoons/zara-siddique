import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function About() {
  return (
    <Container className="px-5">
      <Row>
        {/* Empty column on the left */}
        <Col md={1}></Col>

        {/* Profile column */}
        <Col md={3} className="text-center">
          <Image
            src={require("../assets/zara.png")}
            roundedCircle
            fluid
            alt="Zara"
          />

          <div className="my-3">
            <a
              href="https://www.linkedin.com/in/zarasiddique"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="me-3" />
            </a>
            <a
              href="https://twitter.com/thezarasiddique"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} className="me-3" />
            </a>
            <a
              href="https://github.com/groovychoons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </Col>
        <Col md={1}></Col>

        {/* Main content column */}
        <Col md={6}>
          <p>
            I'm a third-year PhD student at Cardiff University in the{" "}
            <a href="https://cardiffnlp.github.io/">Cardiff NLP</a> Group. My
            research focuses on intersectional harms in LLMs, looking
            specifically at how we can measure and mitigate these harms in NLP
            systems.
          </p>
          <p>If you'd like to know more about me, my CV is linked above.</p>
          <h2>Publications</h2>
          <ul>
            <li>
              <a href="https://arxiv.org/abs/2407.06917">
                Who is better at math, Jenny or Jingzhen? Uncovering Stereotypes
                in Large Language Models
              </a>
              <p>
                <strong>Zara Siddique,</strong> Liam D. Turner, Luis
                Espinosa-Anke (EMNLP 2024).
              </p>
            </li>
          </ul>
        </Col>

        {/* Empty column on the right */}
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}

export default About;
