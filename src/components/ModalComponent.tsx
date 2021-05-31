import React from 'react';
import './ModalComponent.css';


interface ModalProps {
    institution: string,
    programme_name: string,
    description: string,
    link: string,
    isOpen: boolean,
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ institution, programme_name, description, link, isOpen, onClose, }) => {
    const outsideRef = React.useRef(null);

    const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === outsideRef.current) {
            onClose();
        }
    }
    return isOpen ? (
        <div className='modal'>
            <div
                ref={outsideRef}
                className={'modal_overlay'}
                onClick={handleCloseOnOverlay}
            />
            <div className='modal_box'>

                <div className='modal_title'>
                    {institution}
                </div>
                <div className='modal_submission'>
                    {programme_name}
                </div>
                <div className='modal_description'>
                    {description}
                </div>
                <div className='modal_description'>
                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                </div>
            </div>

        </div>
    ) : null;
};

export default Modal