import React from 'react';
import Popup from '../Popup/Popup';

function PopupWithForm(props) {

  function handleOnRegister(e) {
    e.preventDefault();
    props.onRegisterSubmit();
  }

  return (
    <Popup
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <h2 className='popup__title'>{props.title}</h2>
      <form className='popup__form' action="">
        {props.children}
        <div className="popup__error-container popup__error-container_submit">
          <span className="popup__field-error form-field-error">errors.someError</span>
        </div>
        <button className='popup__submit-btn' onSubmit={handleOnRegister}>{props.submitText}</button>
        <p className='popup__redirect-str'>or
          <span className='popup__redirect-link' onClick={props.onRedirect}> {props.redirectText}</span>
        </p>
      </form>
    </Popup>
  )
}

export default PopupWithForm;