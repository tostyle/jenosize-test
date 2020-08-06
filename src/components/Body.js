import React from "react";
import { Container } from "react-bootstrap";

function Body({ children }) {
  return (
    <Container style={{ marginTop: "3rem", marginBottom: "5rem" }}>
      {children}
    </Container>
  );
}

export default Body;
