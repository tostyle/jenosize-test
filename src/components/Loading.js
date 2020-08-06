import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
