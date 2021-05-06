import React from "react";
import { Button, Row, Col } from "react-bootstrap";

function Towns({ travel }) {
  return (
    <>
      <Row>
        <Col>Wybierz miasto do którego pojedziesz</Col>
      </Row>
      <Row>
        <Button onClick={travel} variant="primary" size="lg">
          Katowice
        </Button>
        <Button onClick={travel} variant="primary" size="lg">
          Tychy
        </Button>
      </Row>
      <Row>
        <Button onClick={travel} variant="primary" size="lg">
          Oświęcim
        </Button>
        <Button onClick={travel} variant="primary" size="lg">
          Murcki
        </Button>
      </Row>
      <Row>
        <Button onClick={travel} variant="primary" size="lg">
          Zabrze
        </Button>
        <Button onClick={travel} variant="primary" size="lg">
          Gliwice
        </Button>
      </Row>
    </>
  );
}

export default Towns;
