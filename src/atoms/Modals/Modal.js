import React from 'react';
import { Modal } from 'react-bootstrap';

export const NewModal = ({
    show,
    modalHandle,
    heading,
    data,
    full = false,
    backdrop=false,
    size = 'lg',
    dialogClassName = 'dialog',
}) => {
    return (
        <Modal
            show={show}
            size={size}
            onHide={modalHandle}
            backdrop={backdrop}
            dialogClassName={dialogClassName}>
            <Modal.Header closeButton>
                <Modal.Title>{heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{data}</Modal.Body>
        </Modal>
    );
};
