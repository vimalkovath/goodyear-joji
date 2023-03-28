import React from "react";
import { Modal } from "react-bootstrap";

export const SaveModal = ({
  show,
  modalHandle,
  heading,
  data,
  full = false,
  size = "lg",
  dialogClassName = "dialog",
}) => {
  return (
    <Modal
      show={show}
      size={size}
      onHide={modalHandle}
      backdrop={false}
      dialogClassName={dialogClassName}
    >
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{data}</Modal.Body>
    </Modal>
  );
};
