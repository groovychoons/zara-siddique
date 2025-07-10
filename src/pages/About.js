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
              <FaGithub size={24} className="me-3"/>
            </a>
            <a
              href="https://scholar.google.co.uk/citations?user=B_LyqWEAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogleScholar size={24} className="me-3"/>
            </a>
          </div>
        </Col>
        <Col md={1}></Col>

        {/* Main content column */}
        <Col md={6}>
          <p>
            I'm a fourth-year PhD student at Cardiff University in the{" "}
            <a href="https://cardiffnlp.github.io/">Cardiff NLP</a> Group. My
            research focuses on intersectional harms in LLMs, looking
            specifically at how we can measure and mitigate these harms in NLP
            systems.
          </p>
          <p>If you'd like to know more about me, my CV is linked above.</p>
          <h2>Publications</h2>
          <ul>
            <li>
              <a href="https://arxiv.org/abs/2505.06262">
                Dialz: A Python Toolkit for Steering Vectors
              </a>
              <p>
                <strong>Zara Siddique,</strong> Liam D. Turner, Luis
                Espinosa-Anke (ACL System Demo 2025).
              </p>
            </li>
            <li>
              <a href="https://arxiv.org/abs/2503.05371">
                Shifting Perspectives: Steering Vector Ensembles for Robust Bias Mitigation in LLMs
              </a>
              <p>
                <strong>Zara Siddique,</strong> Irtaza Khalid, Liam D. Turner, Luis
                Espinosa-Anke.
              </p>
            </li>
            <li>
              <a href="https://aclanthology.org/2024.emnlp-main.1035/">
                Who is better at math, Jenny or Jingzhen? Uncovering Stereotypes
                in Large Language Models
              </a>
              <p>
                <strong>Zara Siddique,</strong> Liam D. Turner, Luis
                Espinosa-Anke (EMNLP 2024).
              </p>
            </li>
            <hr />
            <li>
              <a href="https://arxiv.org/abs/2412.15375">
                Automatic Extraction of Metaphoric Analogies from Literary Texts: Task Formulation, Dataset Construction, and Evaluation
              </a>
              <p>
                Joanne Boisson, <strong>Zara Siddique,</strong> Hsuvas Borkakoty, Dimosthenis Antypas, Luis Espinosa Anke, Jose Camacho-Collados
                (COLING 2025).
              </p>
            </li>

            <li>
              <a href="https://aclanthology.org/2024.conll-1.28/">
                How Are Metaphors Processed by Language Models? The Case of Analogies
              </a>
              <p>
                Joanne Boisson, Asahi Ushio, Hsuvas Borkakoty, Kiamehr Rezaee, Dimosthenis Antypas, <strong>Zara Siddique,</strong> Nina White, Jose Camacho-Collados (CoNLL 2024).
              </p>
            </li>
          </ul>
          <br />
          <h2>Other Stuff</h2>
          <p>
            I also used to run the book club Lez Read, which is currently on hiatus.
            I made a silly little website for it <a href="https://lezread.co.uk/">here</a>, which I'm quite proud of.
          </p>
          <br />
        </Col>

        {/* Empty column on the right */}
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}

export default About;
