import React, { useEffect, useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalBody from "react-bootstrap/ModalBody";
import ModalDialog from "react-bootstrap/ModalDialog";
import Modal from "react-bootstrap/Modal";

const HelpIcon = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        className=" modal-open bg-blue-500 text-white active:bg-blue-600 mx-20 p-8 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={handleShow}
      >
        <AiFillQuestionCircle />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HelpIcon;
