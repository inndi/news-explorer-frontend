import React, { useEffect } from 'react';

function Popup(props) {
  useEffect(() => {
    if (!props.isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        props.onClose();
      }
    }

    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [props.isOpen, props.onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }

  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}
      onClick={handleOverlay}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={props.onClose}></button>
        {props.children}
      </div>
    </div>
  )
}

export default Popup;