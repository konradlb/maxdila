import React, { useState, useContext } from "react";
import { AppStateContext } from "../../context/AppStateContext";
import { Button, Modal, Form, Col } from "react-bootstrap";

function Buy() {
  const appState = useContext(AppStateContext);

  const amount =
    appState.items.selectedMarketItem !== null
      ? appState.marketItems[appState.items.selectedMarketItem].amount
      : 0;

  const [rangeValue, setRangeValue] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleBuy = () => {
    setShowModal(false);
    appState.items.buyItems(appState.items.selectedMarketItem, rangeValue);
  };

  const handleShow = () => {
    setShowModal(true);
    setRangeValue(Math.ceil(amount / 2));
  };

  const modalBody = (
    <Modal.Body>
      {appState.items.selectedMarketItem != null ? (
        <>
          Kupujesz {appState.namesItems[appState.items.selectedMarketItem]}. Na
          lokalnym rynku dostępne jest{" "}
          {appState.marketItems[appState.items.selectedMarketItem].amount}{" "}
          sztuk.
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
                    appState.marketItems[appState.items.selectedMarketItem]
                      .price
                  }
                />
              </Col>
            </Form.Row>
          </Form>
        </>
      ) : (
        `Zaznacz towar który chcesz kupić`
      )}
    </Modal.Body>
  );

  return (
    <>
      <Button variant="primary" size="lg" block onClick={handleShow}>
        Kupuj
      </Button>

      <Modal
        show={showModal}
        onHide={handleClose}
        animation={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Kup towar</Modal.Title>
        </Modal.Header>
        {modalBody}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {appState.items.selectedMarketItem !== null ? "Anuluj" : "Zamknij"}
          </Button>
          {appState.items.selectedMarketItem !== null && (
            <Button variant="primary" onClick={handleBuy}>
              Kup towar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Buy;
