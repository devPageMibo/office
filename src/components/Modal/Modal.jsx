import React, { useEffect } from 'react';
import {ModalOverlay} from "./Styles.jsx";


const Modal = ({ isOpen, onClose, children }) => {

    useEffect(() => {
        const handleBodyScroll = (e) => {
            if (isOpen) {
                document.body.classList.add('modal-open');
            } else {
                document.body.classList.remove('modal-open');
            }
        };

        document.body.addEventListener('scroll', handleBodyScroll);

        return () => {
            document.body.removeEventListener('scroll', handleBodyScroll);
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <ModalOverlay className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-icon" onClick={onClose}>×</span>
                {children}
                {/*<button className="save-button" onClick={onClose}>Save</button>*/}
            </div>
        </ModalOverlay>
    );
};

export default Modal;


