import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DynamicIcon, { DynamicIconProps } from './DynamicIcon';
import { getMargin } from '@/helpers/text.helper';
import { getColorCode } from '@/helpers/color.helper';

export type ConfirmModalInformation = {
    icon: DynamicIconProps;
    text: string;
    textColor: string;
    height: number | null;
    fontSize: number;
    title: string;
    content: string;
    confirmText: string;
    confirmButtonColor: string;
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
            {item.height && <Button className='w-100 bg-transparent border-none' style={{ height: item.height }} onClick={handleShow}>
                <span className="d-flex flex-row align-items-center">
                    {item.icon &&
                        <DynamicIcon iconName={item.icon.iconName} iconColor={item.icon.iconColor} iconSize={item.icon.iconSize} iconBackground={false} />
                    }
                    <span className={getMargin(item.icon, item.text)} style={{ color: getColorCode(item.textColor), fontSize: item.fontSize }}>{item.text}</span>
                </span>
            </Button>
            }

            {!item.height && <Button className='w-100 bg-transparent border-none' onClick={handleShow}>
                <span className="d-flex flex-row align-items-center">
                    {item.icon &&
                        <DynamicIcon iconName={item.icon.iconName} iconColor={item.icon.iconColor} iconBackground={false} />
                    }
                    <span className={getMargin(item.icon, item.text)} style={{ color: getColorCode(item.textColor), fontSize: item.fontSize }}>{item.text}</span>
                </span>
            </Button>
            }

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{item.content}</Modal.Body>
                <Modal.Footer>
                    <Button className='border-none' variant="secondary" onClick={handleClose}>
                        {item.cancelText}
                    </Button>
                    <Button className='border-none' style={{ backgroundColor: getColorCode(item.confirmButtonColor) }} onClick={handleClose}>
                        {item.confirmText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmModal;