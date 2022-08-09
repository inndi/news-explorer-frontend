import React from 'react';

function Popup(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={props.onClose}></button>
        {props.children}
      </div>
    </div>
  )
}

export default Popup;