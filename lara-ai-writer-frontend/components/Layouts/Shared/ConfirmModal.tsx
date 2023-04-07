import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IconType } from 'react-icons';

export type ConfirmModalInformation = {
    buttonIcon: IconType | null;
    text: string;
    textColor: string;
    height: number;
    fontSize: number;
    title: string;
    content: string;
    confirmText: string;
    cancelText: string;
}

type ConfirmModalProps = {
    item: ConfirmModalInformation
}

const ConfirmModal = ({ item }: ConfirmModalProps) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='w-100 bg-transparent border-none' style={{ height: item.height }} onClick={handleShow}>
                <span className="d-flex flex-row align-items-center">
                    {item.buttonIcon &&
                        <item.buttonIcon
                            className="fill-current mr-1 p-1"
                            style={{
                                color: item.textColor,
                                height: item.height / 2,
                                width: item.height / 2
                            }}
                        />}
                    <span style={{ color: item.textColor, fontSize: item.fontSize }}>{item.text}</span>
                </span>
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{item.content}</Modal.Body>
                <Modal.Footer>
                    <Button className='border-none' variant="secondary" onClick={handleClose}>
                        {item.cancelText}
                    </Button>
                    <Button className='border-none' style={{ backgroundColor: item.textColor }} onClick={handleClose}>
                        {item.confirmText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmModal;