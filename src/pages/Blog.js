import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogData";
import { Helmet } from "react-helmet-async";

function Blog() {
  return (
    <Container className="px-5">
      <Helmet>
        <title>Blog | Zara Siddique</title>
        <meta name="description" content="Read Zara Siddique's latest blogs on NLP, AI, and machine learning." />
        <meta name="keywords" content="Zara Siddique, Blog, NLP, AI, ML" />
        <meta property="og:title" content="Blog | Zara Siddique" />
        <meta property="og:description" content="Read Zara Siddique's latest blogs on NLP, AI, and machine learning." />
        <meta property="og:url" content="https://zarasiddique.com/blog" />
      </Helmet>
      <h1 className="mb-4 text-center">Blog</h1>
      <Row>
        {blogPosts.map((post) => (
          <Col md={4} key={post.id} className="mb-4">
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3 text-primary">{post.title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{post.date}</Card.Subtitle>
                <Card.Text className="mb-4">{post.excerpt}</Card.Text>
                <div className="mt-auto">
                  <Link to={`/blog/${post.slug}`} className="btn btn-outline-primary">
                    Read More
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blog;
