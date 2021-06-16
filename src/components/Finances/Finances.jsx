import React, { useState, useContext } from "react";
import { AppStateContext } from "../../context/AppStateContext";
import { Button, Modal } from "react-bootstrap";

function Finances() {
  const appState = useContext(AppStateContext);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const modalBody = (
    <Modal.Body> Twój dług to: {appState.stats.debt}</Modal.Body>
  );

  return (
    <>
      <Button variant="primary" block onClick={handleShow}>
        Finanse
      </Button>

      <Modal
        show={showModal}
        onHide={handleClose}
        animation={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Finanse </Modal.Title>
        </Modal.Header>
        {modalBody}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            "Zamknij"
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Finances;
