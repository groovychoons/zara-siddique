import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogData";
import { Helmet } from "react-helmet-async";

function Blog() {
  return (
    <Container className="px-5">
      <Helmet>
        <title>Blog | Zara Siddique</title>
        <meta name="description" content="Read Zara Siddique's latest blogs." />
        <meta name="keywords" content="Zara Siddique, Blog, NLP, AI, ML" />
        <meta property="og:title" content="Blog | Zara Siddique" />
        <meta property="og:description" content="Read Zara Siddique's latest blogs." />
        <meta property="og:url" content="https://zarasiddique.com/blog" />
        <meta name="twitter:title" content="Blog | Zara Siddique" />
        <meta name="twitter:description" content="Read Zara Siddique's latest blogs." />
        <meta name="twitter:url" content="https://zarasiddique.com/blog" />
      </Helmet>

      <h1 className="mb-4">Blog</h1>
      <ul className="ps-4">
        {blogPosts.map((post) => (
          <li key={post.id} className="mb-2">
            <span className="text-muted">{post.date}</span> -{" "}
            <Link to={`/blog/${post.slug}`} className="text-primary">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Blog;
