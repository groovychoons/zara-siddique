import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HelmetProvider } from "react-helmet-async";
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
