import React, { useState, useContext } from "react";
import { AppStateContext } from "../../context/AppStateContext";
import { Button, Modal } from "react-bootstrap";

function Buy() {
  const appState = useContext(AppStateContext);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" size="lg" block onClick={handleShow}>
        Kupuj
      </Button>

      <Modal show={showModal} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {appState.items.activeMarketItem
            ? `Kupujesz ${appState.namesItems[appState.items.activeMarketItem]}`
            : `zaznacz towar który chcesz kupić`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Anluluj
          </Button>

          <Button
            variant={appState.items.activeMarketItem ? "primary" : "secondary"}
            onClick={appState.items.activeMarketItem && handleClose}
          >
            Kup towar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Buy;
