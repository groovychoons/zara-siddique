import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Post1() {
    return (
        <Container>
            <Row className="mb-4">
                <Col md={12} lg={10}>
                    <h1>My Favourite EMNLP 2024 Papers</h1>
                    <p className="text-muted">31st Dec 2024</p>

                    <p>I attended my first major NLP conference this year: EMNLP in Miami. I learned a lot, met a lot of cool people and Miami was lush! ☀️🏝️🪩</p>
                    <p>I thought I would share some of my favourite papers I came across during the conference: some from the main conference and others from workshops and co-located things. Note: these are not necessarily the 'best' papers from the conference, simply ones I found fun and/or interesting by some arbitrary measure. I am easily swayed by pretty posters.</p>
                    <p>I've given a brief description of what each one was about but these were very much hasty notes I scribbled down.</p>
                    <p>I'll start with an&nbsp;<strong>honourable mention</strong>:</p>

                    <br />

                    <Row>
                        <Col lg={8}>
                            <h4><a href="https://aclanthology.org/2024.emnlp-main.1063/">Foodie QA</a> - Had snacks at their poster stand. 10/10 behaviour.</h4>
                            <p>What's it about?</p>
                            <p>The authors evaluate LLMs and VLMs on a multimodal dataset for fine-grained understanding of Chinese food culture.</p>
                            <p>FoodieQA comprises three multiple choice question-answering tasks where models need to answer questions based on multiple images, a single image, and text-only descriptions.</p>
                            <p>On to the main list!</p>
                        </Col>
                        <Col lg={4}>
                            <img
                                src={require("../assets/1_foodieqa.png")}
                                alt="FoodieQA Dataset"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                    <br />
                    <h4>5. <a href="https://aclanthology.org/2024.findings-emnlp.995/">LLM Tropes</a> (My favourite poster)</h4>
                    <br />
                    <Row>
                        <Col lg={4}>
                            <img
                                src={require("../assets/1_llmtropes.png")}
                                alt="LLM Tropes Poster"
                                className="img-fluid"
                            />
                        </Col>
                        <Col lg={8}>
                            <p>What's it about?</p>
                            <ul>
                                <li>Take 62 statements from the Political Compass Test (PCT)</li>
                                <li>Test this using 420 prompt variations (demographic changes or style changes)</li>
                                <li>Test on 6 LLMs</li>
                                <li>Demographic features significantly impact outcomes</li>
                                <li>Compare open-ended and closed-form responses</li>
                                <li>Reveal &lsquo;tropes&rsquo; in responses that are consistent across demographics, e.g.
                                    <ul>
                                        <li>&lsquo;Love is love&rsquo;</li>
                                        <li>&lsquo;National pride connects us&rsquo;</li>
                                        <li>&lsquo;Work towards building a better world&rsquo;</li>
                                    </ul>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <br />
                    <h4>4. <a href="https://aclanthology.org/2024.nlp4pi-1.1/">What is the social benefit of hate speech detection research? A Systematic Review</a></h4>
                    <br />
                    <Row>
                        <Col lg={8}>
                            <p>Not only was the author a really lovely human, they also did research that we don't see enough of in NLP: figuring out if any of the research we do actually makes a difference in the world.</p>
                            <p>What's it about?</p>

                            <ul>
                                <li>Reviews 48 hate speech detection systems from 37 publications</li>
                                <li>Tests these against 8 principles</li>
                                <ul>
                                    <li>Human-centred, transparency, well-being, privacy, reliability, interrogation and accountability</li>
                                </ul>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <img
                                src={require("../assets/1_hatespeech.png")}
                                alt="Hate Speech Detection"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                    <br />
                    <h4>3. <a href="https://arxiv.org/abs/2410.24159">BabyLM - GPT or BERT</a>: why not both?</h4>
                    <br />
                    <Row>
                        <Col lg={4}>
                            <img
                                src={require("../assets/1_babylm.png")} alt="BabyLM" className="img-fluid" />
                        </Col>
                        <Col lg={8}>

                            <p>This was a popular one with my whole research group, as was the BabyLM challenge in general. In fact, we've been thinking about how to do some sort of Welsh BabyLM project - stay tuned! 👀</p>
                            <p>Did I understand it all? Definitely not. Did I nod along at their poster and hope no-one asked me any questions? Absolutely!</p>
                            <p>What's it about?</p>
                            <ul>
                                <li aria-level="1">Part of the BabyLM challenge</li>
                                <li aria-level="1">Merge GPT and BERT into a single transformer architecture</li>
                                <li aria-level="1">Improved performance over each one separately</li>
                                <li aria-level="1">Achieves the improvements without requiring additional parameters or increased training time over doing either GPT or BERT</li>
                                <li aria-level="1">Possibility that this does not scale well</li>
                            </ul>
                            <p>My dumb person notes:</p>
                            <ul>
                                <li>GPT modelling - guessing the next words</li>
                                <li>BERT - guessing a masked word</li>
                                <li>Instead of predicting masked tokens at their original positions, we shift the predictions one position to the right, aligning them with the CLM&rsquo;s next-token prediction pattern.</li>
                            </ul>
                        </Col>
                    </Row>
                    <br />
                    <h4>2. <a href="https://aclanthology.org/2024.findings-emnlp.972/">ValueScope: Unveiling Implicit Norms and Values via Return Potential Model of Social Interactions</a></h4>
                    <br />
                    <Row>
                        <Col lg={8}>
                            <p>These guys also get top marks for pretty poster and a really interesting research topic in general.</p>
                            <p>I would strongly recommend taking a look at the paper.</p>
                            <p>What's it about?</p>
                            <ul>
                                <li>Look at 13 different Reddit communities</li>
                                <ul>
                                    <li> Across gender, politics, science and finances</li>
                                </ul>
                                <li>Traces the evolution of different communities and how their norms change over time</li>
                                <li>E.g. if an election or some other event happens</li>
                            </ul>
                            <p>So the little graph shows how supportiveness and a sense of humour tended downward after the election, with the exception of supportiveness in the Libertarian commuity, which increased post-election.</p>
                        </Col>
                        <Col lg={4}>
                            <img
                                src={require("../assets/1_valuescope.png")}
                                alt="ValueScope"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                    <br />
                    <h4>1. <a href="https://aclanthology.org/2024.emnlp-main.1182/">Connecting the Dots</a></h4>
                    <br />
                    <Row>
                        <Col lg={4}>
                            <img
                                src={require("../assets/1_connections.png")}
                                alt="Math Bias"
                                className="img-fluid"
                            />
                        </Col>
                        <Col lg={8}>
                            <p>As someone already obsessed with NYT Games, my eyes lit up upon seeing this poster. I believe it spun out of a Masters project, so it's extra impressive that it's at EMNLP Main.</p>
                            <p>If you're not familiar with the game, the aim is to create 4 groups of 4 words based on shared categories, from an unlabelled grid of 16 words.</p>
                            <p>What's it about?</p>
                            <ul>
                                <li aria-level="1">Can LLMs solve the New York Times Connections game?</li>
                                <li aria-level="1">The authors use this as a benchmark to test abstract reasoning in LLMs</li>
                                <li aria-level="1">Claude 3.5 Sonnet performs best&nbsp;</li>
                                <ul>
                                    <li aria-level="2">(better than GPT-4o, Gemini, Llama 3.1 and Mistral 2)</li>
                                </ul>
                                <li aria-level="1">Examine performance through a taxonomy to figure out which types of word associations LLMs are good/bad at</li>
                                <ul>
                                    <li aria-level="2">(The taxonomy itself is really interesting)</li>
                                </ul>
                            </ul>
                        </Col>
                    </Row>
                    <br />
                    <p>So that's my round up! Hope it was interesting for you too :)</p>
                    <p>Bonus pic of me with some raccoons:</p>
                    <img src={require("../assets/1_raccoons.png")} alt="Zara with raccoons" className="img-fluid w-50"/>
                    <br /> <br /> <br /> <br />
                </Col>
            </Row>
        </Container>
    );
}

export default Post1;
