import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogData";

function Blog() {
  return (
    <Container className="px-5">
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
