import React from "react";
import { Container, Row, Col} from "react-bootstrap";

function Publications() {
  return (
    <Container className="px-5">
      <Row>

        {/* Main content column */}
        <Col md={6}>
          <h2>Publications</h2>
          <ul>
            <li>
              <a href="https://arxiv.org/abs/2503.05371">
                Shifting Perspectives: Steering Vectors for Robust Bias Mitigation in LLMs
              </a>
              <p>
                <strong>Zara Siddique,</strong> Irtaza Khalid, Liam D. Turner, Luis
                Espinosa-Anke (EACL 2026).
              </p>
            </li>
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
        </Col>

        {/* Empty column on the right */}
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}

export default Publications;
