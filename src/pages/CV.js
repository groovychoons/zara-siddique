import React from 'react';
import { Container, Button } from 'react-bootstrap';

function CV() {
  return (
    <Container>
      <h1>My CV</h1>
      <p>You can download my CV by clicking the link below:</p>
      <Button variant="primary" href="/path-to-your-cv.pdf" download>Download CV</Button>
    </Container>
  );
}

export default CV;
