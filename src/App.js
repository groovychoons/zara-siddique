import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import About from './pages/About';
import CV from './pages/CV';
import Blog from './pages/Blog';
import BlogPost from "./pages/BlogPost";
import cv from "./assets/Zara Siddique CV.pdf";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Send a pageview event to Google Analytics on route change
    window.gtag("event", "page_view", {
      page_path: location.pathname,
    });
  }, [location]);

  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://zarasiddique.com/" />
          <meta property="og:title" content="Zara Siddique" />
          <meta property="og:description" content="A website all about Zara Siddique." />
          <meta property="og:image"
            content="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzAyNDQ2LXdpa2ltZWRpYS1pbWFnZS1rb3dia3MxZS5qcGc.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://zarasiddique.com/" />
          <meta name="twitter:title" content="Zara Siddique" />
          <meta name="twitter:description" content="A website all about Zara Siddique." />
          <meta name="twitter:image"
            content="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzAyNDQ2LXdpa2ltZWRpYS1pbWFnZS1rb3dia3MxZS5qcGc.jpg" />

          <meta name="title" content="Zara Siddique" />
          <meta name="description" content="A website all about Zara Siddique." />
          <meta name="author" content="Zara Siddique" />
        </Helmet>
        <Container className="pt-5">
          <Navbar expand="lg">
            <Navbar.Brand href="/">Zara Siddique</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="/">About</Nav.Link>
                <Nav.Link href={cv} target="_blank" rel="noreferrer">CV</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <hr className='mb-5' />

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </Container>
      </HelmetProvider>
    </div>
  );
}

export default App;
