import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./modals.css";

export const InfoDialog = ({
  show,
  modalClose,
  heading,
  content,
  full = false,
  size = "md",
  successCallback,
  dialogClassName = "dialog",
  handle_close,
}) => {
  const hangle_button = () => {
    modalClose();
    handle_close();
  };
  return (
    <Modal
      show={show}
      size={size}
      onHide={modalClose}
      backdrop={false}
      dialogClassName={dialogClassName}
    >
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>{content}</div>
        <br />
        <div className="text-center">
          <Button
            type="submit"
            className="btn action-btn"
            onClick={() => hangle_button()}
          >
            Ok
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
