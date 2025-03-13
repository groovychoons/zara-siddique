import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Post2() {
    return (
        <Container>
            <Row className="mb-4">
                <Col md={12} lg={10}>
                    <h1>Shifting Perspectives Paper: Creating a dial to 'turn down' social bias in LLMs</h1>
                    <p className="text-muted">12th March 2025</p>

                    <p>
                        Our recent paper <a href="https://arxiv.org/abs/2503.05371">Shifting Perspectives: Steering Vector Ensembles for Robust Bias Mitigation in LLMs</a> builds on the new field of activation engineering (also known as representation engineering). So far, work has looked at controlling concepts like <a href="https://arxiv.org/abs/2306.03341">truth</a> and <a href="https://aclanthology.org/2024.acl-long.828/">honesty</a>, as well as <a href="https://proceedings.neurips.cc/paper_files/paper/2024/file/f545448535dfde4f9786555403ab7c49-Paper-Conference.pdf">model refusal</a>.
                    </p>

                    <p>
                        A common way to find neurons that correspond to a concept (e.g. gender) is to take the difference in activations from a <strong>contrastive pair</strong> of inputs, from which you get a <strong>steering vector</strong>. These steering vectors are actually a collection of vectors at each layer of a model. The vector is added (or subtracted) to the activations at each layer, or at the layers of your choosing. We also apply a scalar to these vectors, which is where the 'dial' element comes into things: we can set these bias vectors to increase or decrease bias in outputs, and by varying degrees. And the results were pretty wild (but also crazy racist in some scenarios and were not included in the paper). There's a nice diagram of how this works on the first page of <a href="https://aclanthology.org/2024.acl-long.828/">this paper</a>.
                    </p>

                    <p>
                        Current work has carefully selected either a single contrastive pair, or a set of contrastive pairs and calculated the mean difference in activations at each layer (or a PCA at each layer in our case). One of the first interesting things we do is dynamically create 50 different contrastive datasets for each of 9 axes in the BBQ dataset, and improve the generated dataset using Bayesian optimization, until we get a contrastive dataset that is optimized to reduce bias (e.g. age bias or racial bias). This cute diagram visualises it for you:
                    </p>

                    <Row className="py-4">
                        <Col md={6}>
                            <img
                                src={require("../assets/2_steering.png")}
                                alt="Steering Vector Ensembles Diagram"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>



                    <p>
                        The second (and cooler) discovery was that if you add all these vectors together, in a lot of cases, this performs better than any individual steering vector - we call this a Steering Vector Ensemble. In the table below, we show the difference in BBQ and MMLU scores for various baselines: average ISV (average score of the individual steering vectors),  merged datasets (just concatenating all the contrastive datasets used to compute the ISVs), and SVE (a steering vector ensemble).
                    </p>


                    <Row className="py-4">
                        <Col md={6}>
                            <img
                                src={require("../assets/2_steering_table.png")}
                                alt="Steering Vector Ensembles Table of Results"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>

                    <p>
                        I won't give everything away here, but our experiments across Mistral, Llama, and Qwen show promising improvements in fairness without compromising language understanding, though I believe there is a lot more work to do in this area. For more details, and future work recommendations, check out our code on our{" "}
                        <a href="https://github.com/groovychoons/shifting-perspectives" target="_blank" rel="noopener noreferrer">
                            GitHub repository
                        </a> and of course, read the <a href="https://arxiv.org/abs/2503.05371">paper</a>.
                    </p>
                </Col>
            </Row>
            <br />
        </Container>
    );
}

export default Post2;
