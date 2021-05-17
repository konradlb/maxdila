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
          <Modal.Title>Kup towar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {appState.items.selectedMarketItem
            ? `Kupujesz ${
                appState.namesItems[appState.items.selectedMarketItem]
              }. Na lokalnym rynku dostępne jest ${
                appState.marketItems[appState.items.selectedMarketItem].amount
              } sztuk.`
            : `zaznacz towar który chcesz kupić`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Anluluj
          </Button>

          <Button
            variant={
              appState.items.selectedMarketItem ? "primary" : "secondary"
            }
            onClick={appState.items.selectedMarketItem && handleClose}
          >
            Kup towar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Buy;
