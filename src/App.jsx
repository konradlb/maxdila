import React, { useContext } from "react";
import { AppStateContext } from "./context/AppStateContext";

import { Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import ItemsTable from "./components/ItemsTable/ItemsTable.jsx";
import Towns from "./components/Towns/Towns.jsx";
import Events from "./components/Events/Events.jsx";

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
            <Col>Kasa:{appState.stats.money}</Col>
            <Col>Depozyt:{appState.stats.deposit}</Col>
          </Row>
          <Row>
            <Col>Prestiż: {appState.stats.prestige}</Col>
            <Col>Dług:{appState.stats.debt}</Col>
          </Row>
          <Row>Kondycja: {appState.stats.condition}%</Row>
        </Col>
        <Col>
          <Towns travel={appState.travel.onClick} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Events />
        </Col>
      </Row>

      <Row>
        <Col sm="5">
          <Row>Dostępny na rynku towar:</Row>
          <Row>
            <ItemsTable items={appState.marketItems} isMarket={true} />
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
            <Col>
              Miesjce: {appState.stats.storage}/{appState.stats.storageMax}
            </Col>
            <Col>
              <Button
                onClick={appState.showTools.onClick}
                variant="primary"
                size="sm"
              >
                {appState.showTools.value ? "Towar" : "Sprzęt"}
              </Button>
            </Col>
          </Row>
          <Row>
            <ItemsTable
              items={
                appState.showTools.value
                  ? appState.inventoryTools
                  : appState.inventoryItems
              }
              showTools={appState.showTools.value}
              isMarket={false}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
