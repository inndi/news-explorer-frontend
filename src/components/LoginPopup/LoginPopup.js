import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegisterPopup(props) {
  return (
    <PopupWithForm
      title='Sign in'
      submitText='Sign in'
      redirectText='Sign up'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onRedirect={props.onRedirect}
    >
      <div className='popup__field-container'>
        <p className="popup__field-description">Email</p>
        <input className='popup__field' type="email" placeholder='Enter email' />
        <div className="popup__error-container">
          <span className="popup__field-error avaLink////////////////////-field-error">errors.someError</span>
        </div>
        <p className="popup__field-description">Password</p>
        <input className='popup__field' type="password" placeholder='Enter password' />
        <div className="popup__error-container">
          <span className="popup__field-error avaLink/////////////////////-field-error">errors.someError</span>
        </div>
      </div>
    </PopupWithForm>
  )
}

export default RegisterPopup;