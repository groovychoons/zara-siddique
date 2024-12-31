import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import blogPosts from "../data/blogData";

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.slug === id);

  if (!post) {
    return (
      <Container>
        <h1>Post Not Found</h1>
      </Container>
    );
  }

  // Render the component associated with the post
  const PostComponent = post.component;

  return (
    <Container className="px-5">
      <PostComponent />
    </Container>
  );
}

export default BlogPost;
