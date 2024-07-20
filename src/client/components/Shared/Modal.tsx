import React, { useState } from 'react';

interface ModalProps {
  children: any;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div className="modal">
        <button className='modal-close-btn' onClick={handleClose}>X</button>
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
};

export default Modal;
