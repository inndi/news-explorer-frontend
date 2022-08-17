import React from 'react';
import Popup from '../Popup/Popup';

function PopupWithForm(props) {

  function handleOnRegister(e) {
    e.preventDefault();
    if (props.onRegisterSubmit) {
      props.onRegisterSubmit(props.email, props.password, props.username);
    }
    if (props.onLoginSubmit) {
      props.onLoginSubmit(props.email, props.password);
    }
    props.resetForm();
  }

  return (
    <Popup
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <h2 className='popup__title'>{props.title}</h2>
      <form className='popup__form' action="" onSubmit={handleOnRegister}>
        {props.children}
        <div className="popup__error-container popup__submit-error">

          <span className="popup__field-error form-field-error">{props.isSingUpError ? props.isSingUpError : ''}</span>

        </div>
        <button className={`popup__submit-btn ${!props.isValid ? 'popup__submit-btn_disabled' : ''}`} type="submit">{props.submitText}</button>
        <p className='popup__redirect-str'>or
          <span className='popup__redirect-link' onClick={props.onRedirect}> {props.redirectText}</span>
        </p>
      </form>
    </Popup>
  )
}

export default PopupWithForm;