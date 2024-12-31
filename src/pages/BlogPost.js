import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import blogPosts from "../data/blogData";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>{post.title} | Zara Siddique</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`Zara Siddique, ${post.title}, NLP, AI, ML`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://zarasiddique.com/blog/${post.slug}`} />
        {post.image ? <meta property="og:image" content={post.image} /> : null}

        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:url" content={`https://zarasiddique.com/blog/${post.slug}`} />
        {post.image ? <meta name="twitter:image" content={post.image} /> : null}
        </Helmet>
      <PostComponent />
    </Container>
  );
}

export default BlogPost;
