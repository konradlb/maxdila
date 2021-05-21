import React, { useState, useContext } from "react";
import { AppStateContext } from "../../context/AppStateContext";
import { Button, Modal, Form, Col } from "react-bootstrap";

function Sell() {
  const appState = useContext(AppStateContext);

  const amount =
    appState.items.selectedInventoryItem !== null
      ? appState.inventoryItems[appState.items.selectedInventoryItem].amount
      : 0;

  const [rangeValue, setRangeValue] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleSell = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
    setRangeValue(Math.ceil(amount / 2));
  };

  const modalBody = (
    <Modal.Body>
      {appState.items.selectedInventoryItem != null ? (
        <>
          Przy sobie masz do sprzedania{" "}
          {appState.inventoryItems[appState.items.selectedInventoryItem].amount}{" "}
          sztuk. Cena na czarnym rynku to:{" "}
          {appState.marketItems[appState.items.selectedInventoryItem].price} zł.
          <Form>
            <Form.Row>
              <Col xs="7">
                <Form.Label>Ilość sztuk</Form.Label>
                <Form.Control
                  type="range"
                  value={rangeValue}
                  min={1}
                  max={amount}
                  onChange={(e) => setRangeValue(e.target.value)}
                />
              </Col>
              <Col xs="2">
                <Form.Control
                  type="number"
                  value={rangeValue}
                  max={amount}
                  onChange={(e) =>
                    e.target.value > amount
                      ? setRangeValue(amount)
                      : setRangeValue(e.target.value)
                  } //jeżeli wartość e.target.value jest większa od dostępnej ilości to ustaw dostępną ilość
                />
              </Col>
              <Col xs="1">
                <Form.Label>Za</Form.Label>
              </Col>
              <Col xs="2">
                <Form.Control
                  defaultValue={
                    rangeValue *
                    appState.marketItems[appState.items.selectedInventoryItem]
                      .price
                  }
                />
              </Col>
            </Form.Row>
          </Form>
        </>
      ) : (
        `Zaznacz towar który chcesz sprzedać`
      )}
    </Modal.Body>
  );

  return (
    <>
      <Button variant="primary" size="lg" block onClick={handleShowModal}>
        Sprzedaj
      </Button>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        animation={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Sprzedajesz{" "}
            {appState.namesItems[appState.items.selectedInventoryItem]}
          </Modal.Title>
        </Modal.Header>
        {modalBody}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            {appState.items.selectedInventoryItem !== null
              ? "Anuluj"
              : "Zamknij"}
          </Button>
          {appState.items.selectedInventoryItem !== null && (
            <Button variant="primary" onClick={handleSell}>
              Sprzedaj towar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Sell;
