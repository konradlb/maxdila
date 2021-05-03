import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppStateContext } from "./context/AppStateContext";

import ItemsTable from "./components/ItemsTable/ItemsTable";

import { Button, Row, Col, Container } from "react-bootstrap";

function App() {
  const appState = useContext(AppStateContext);

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="primary">Nowa gra</Button>
          <Button variant="primary">Wykres</Button>
          <Button variant="primary">Gang</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Row>
            <Col>Kasa:198</Col>
            <Col>Depozyt:0</Col>
          </Row>
          <Row>
            <Col>Prestiż: 0</Col>
            <Col>Dług:</Col>
          </Row>
          <Row>Kondycja: 100%</Row>
        </Col>
        <Col>
          <Row>
            <Col>Wybierz miasto do którego pojedziesz</Col>
          </Row>
          <Row>
            <Button variant="primary" size="lg">
              Katowice
            </Button>
            <Button variant="primary" size="lg">
              Tychy
            </Button>
          </Row>
          <Row>
            <Button variant="primary" size="lg">
              Oświęcim
            </Button>
            <Button variant="primary" size="lg">
              Murcki
            </Button>
          </Row>
          <Row>
            <Button variant="primary" size="lg">
              Zabrze
            </Button>
            <Button variant="primary" size="lg">
              Gliwice
            </Button>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>Wydarzenia</Col>
      </Row>

      <Row>
        <Col sm="5">
          <Row>Dostępny na rynku towar:</Row>
          <Row>
            <ItemsTable items={appState.marketItems} />
          </Row>
        </Col>
        <Col sm="2">
          <Row>
            <Button variant="primary" size="sm" block>
              Wyrzuć
            </Button>
          </Row>
          <Row>
            <Button variant="primary" size="lg" block>
              Kupuj
            </Button>
          </Row>
          <Row>
            <Button variant="primary" size="lg" block>
              Sprzedaj
            </Button>
          </Row>
          <Row>
            <Button variant="primary" block>
              Sklep
            </Button>
          </Row>
          <Row>
            <Button variant="primary" block>
              Szpital
            </Button>
          </Row>
          <Row>
            <Button variant="primary" block>
              Finanse
            </Button>
          </Row>
        </Col>
        <Col sm="5">
          <Row>
            <Col>Miesjce: 100/100</Col>
            <Col>
              <Button variant="primary" size="sm">
                Sprzęt
              </Button>
            </Col>
          </Row>
          <Row>
            <ItemsTable items={appState.inventoryItems} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

// prices = {
//   "grass": (20, 29),
//   "scun": (30, 44),
//   "hash": (20, 29),
//   "acid": (20, 29),
//   "extasy": (15, 21),
//   "speed": (28, 44),
//   "heroine": (40, 59),
//   "coca": (100, 149),
//   "sugar": (40, 59),
//   "mush": (15, 21),
// }
