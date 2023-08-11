import React, { useRef, useEffect } from 'react'
import classes from './Modal.module.css'

const Modal = ({ isOpen, onClose }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            console.log('event', event.target);
            console.log(modalRef.current);
            console.log(modalRef.current && !modalRef.current.contains(event.target));
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                console.log('running');
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={classes['modal']} >
            <div className={classes['modal-content']} ref={modalRef}>
                <div className={classes['rules-heading']}>
                    <h1>RULES</h1>
                    <img className={classes['desktop-cross']} src="./images/cross-black.png" alt="exit" onClick={onClose} />
                </div>

                <img className={classes['rules-img']} src="/images/image-rules.svg" alt="rules" />
                <img className={classes['mobile-cross']} src="./images/cross-black.png" alt="exit" onClick={onClose} />
            </div>

        </div>
    )
}

export default Modal