import React, { useEffect, useState } from "react";
import { AiOutlineBook } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalBody from "react-bootstrap/ModalBody";
import Modal from "react-bootstrap/Modal";
const AnswerIcon = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className=" bg-blue-500 text-white active:bg-blue-600 mx-20 my-4	justify-center	 p-8 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={handleShow}
      >
        <AiOutlineBook />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </ModalHeader>
        <ModalBody> Answersheet will show up</ModalBody>
        <ModalFooter>
          <Button onClick={handleClose} variant="outline-primary">
            Close
          </Button>
          <Button onClick={handleClose} variant="outline-primary">
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default AnswerIcon;
