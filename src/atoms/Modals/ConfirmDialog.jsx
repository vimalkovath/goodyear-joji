import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./modals.css"

export const ConfirmDialog = ({
    show,
    modalClose,
    heading,
    content,
    full = false,
    size = 'md',
    successCallback,
    dialogClassName = 'dialog',
}) => {
    return (
        <Modal
            show={show}
            size={size}
            onHide={modalClose}
            backdrop={false}
            dialogClassName={dialogClassName}>
            <Modal.Header closeButton>
                <Modal.Title>{heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>{content}</div>
                <br />
                <div className='text-center'>
                    <Button
                        type='submit'
                        className='btn action-btn'
                        onClick={() => successCallback()}>
                        Yes
                    </Button>
                    &nbsp;&nbsp;
                    <button
                        type='submit'
                        className='btn blue-btn action-btn'
                        onClick={() => modalClose()}>
                        Cancel
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
};
