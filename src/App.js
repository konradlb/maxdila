import "bootstrap/dist/css/bootstrap.min.css";

import ItemsTable from "./components/ItemsTable";

//import Button from "react-bootstrap/Button";
import { Button, Row, Col, Container, Table } from "react-bootstrap";

function App() {
  const marketItems = [
    {
      name: "grzybki",
      amount: 55,
      price: 47,
    },
    {
      name: "gras",
      amount: 68,
      price: 36,
    },
    {
      name: "grzybki",
      amount: 13,
      price: 25,
    },
    {
      name: "grzybki",
      amount: 89,
      price: 14,
    },
  ];

  const inventoryItems = [
    {
      name: "grzybki",
      amount: 89,
      price: 14,
    },
    {
      name: "grzybki",
      amount: 89,
      price: 14,
    },
    {
      name: "grzybki",
      amount: 89,
      price: 14,
    },
    {
      name: "grzybki",
      amount: 89,
      price: 14,
    },
    {
      name: "grzybki",
      amount: 89,
      price: 14,
    },
    {
      name: "grzybki",
      amount: 89,
      price: 14,
    },
  ];

  const inventoryTools = [
    {
      name: "Kurtka",
      amount: 1,
      legal: true,
    },
    {
      name: "Torba",
      amount: 1,
      legal: true,
    },
    {
      name: "Aktówka",
      amount: 1,
      legal: true,
    },
    {
      name: "Fiat 126p",
      amount: 1,
      legal: true,
    },
    {
      name: "gnat",
      amount: 1,
      legal: false,
    },
  ];

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
            <ItemsTable items={marketItems} />
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
            <ItemsTable items={inventoryItems} />
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
