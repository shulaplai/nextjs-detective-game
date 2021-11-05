import React, { useEffect, useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalBody from "react-bootstrap/ModalBody";

const HelpIcon = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className=" bg-blue-500 text-white active:bg-blue-600 mx-20 p-8 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={handleShow}
      >
        <AiFillQuestionCircle />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </ModalHeader>
        <ModalBody>
          This game is about detective you need to answer question to get more
          infos. After you get enough information, you can piece the case
          together. Finally, you can answer question above.
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose} variant="outline-primary">
            Close
          </Button>
          <Button onClick={handleClose} variant="primary">
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default HelpIcon;
