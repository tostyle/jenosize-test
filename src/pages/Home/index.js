import React, { useState, useCallback } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
import range from "lodash/range";
import Body from "components/Body";

const calculateNumber = (startNumber, count) => {
  const results = range(count).reduce((result, index) => {
    const lastNumber = result[result.length - 1] || startNumber;
    const nextNumber = lastNumber + 2 * index;
    return [...result, nextNumber];
  }, []);
  return results;
};

function Home() {
  const [startNumber, setNumber] = useState(3);
  const [count, setCount] = useState(6);

  const increase = useCallback(() => {
    const newCount = count + 1;
    setCount(newCount);
  }, [setCount, count]);

  const decrease = useCallback(() => {
    const newCount = count > 1 ? count - 1 : 1;
    setCount(newCount);
  }, [setCount, count]);

  const numberResult = calculateNumber(Number(startNumber), Number(count));
  return (
    <Body>
      <Jumbotron>
        Project Repository:{" "}
        <a
          href="https://github.com/tostyle/jenosize-test"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/tostyle/jenosize-test
        </a>
      </Jumbotron>
      <Form>
        <Form.Group controlId="startNumber">
          <Form.Label>Start Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Number"
            value={startNumber}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>
        <Button variant="danger" type="button" onClick={decrease}>
          Decrease Result
        </Button>
        <Button variant="primary" type="button" onClick={increase}>
          Increase Result
        </Button>
      </Form>
      <p>Total Result: {count}</p>
      <p>Result: {numberResult.join()}</p>
    </Body>
  );
}

export default Home;
