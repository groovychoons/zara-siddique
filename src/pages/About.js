import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaBluesky, FaGoogleScholar } from "react-icons/fa6";

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
              href="https://bsky.app/profile/zarasiddique.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBluesky size={24} className="me-3" />
            </a>
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

          </div>
          <div className="mb-3">
            <a
              href="https://github.com/groovychoons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} className="me-3" />
            </a>
            <a
              href="https://scholar.google.co.uk/citations?user=B_LyqWEAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogleScholar size={24} className="me-3" />
            </a>
          </div>
        </Col>
        <Col md={1}></Col>

        {/* Main content column */}
        <Col md={6}>
          <p> Hi! I'm Zara. </p>
          <p>
            I recently completed a PhD  at Cardiff University in the{" "}
            <a href="https://cardiffnlp.github.io/">Cardiff NLP</a> Group. My
            research focused on intersectional harms in LLMs, looking
            specifically at how we can measure and mitigate these harms in NLP
            systems.
          </p>
          <p>
            Now I'm building <a href="https://sproutacademy.co.uk/">Sprout Academy</a>,
            an educational adventure app for ages 5 to 8, built on the UK National Curriculum.
          </p>
          <p>I'm also a Research Associate on the <a href="https://www.scaleresearchwales.org/sweet/">SWEET project</a> at Cardiff University.</p>
          <p>If you'd like to know more about me, a list of my publications and my CV are linked above.</p>
          <hr />
          <h2>Other Stuff</h2>
          <p>
            I also used to run the book club Lez Read, which is currently on hiatus.
            I made a silly little website for it <a href="https://lezread.co.uk/">here </a>
            and now manage <a href="https://cardiffbooknook.com/">Cardiff Book Nook</a>.
          </p>
          <p>If you'd like to get in contact with me, I respond fastest via email or LinkedIn.</p>
          <br />
        </Col>

        {/* Empty column on the right */}
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}

export default About;
