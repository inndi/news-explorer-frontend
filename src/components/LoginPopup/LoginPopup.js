import React from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function RegisterPopup(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  return (
    <PopupWithForm
      title='Sign in'
      submitText='Sign in'
      redirectText='Sign up'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onRedirect={props.onRedirect}
      isValid={isValid}
      email={values.email}
      password={values.password}
      onLoginSubmit={props.onLoginSubmit}
      resetForm={resetForm}
      isAuthError={props.isAuthError}
    >
      <div className='popup__field-container'>
        <p className="popup__field-description">Email</p>
        <input
          onChange={handleChange}
          name='email'
          value={values.email || ''}
          autoComplete='off'
          className='popup__field'
          type="email"
          placeholder='Enter email'
          required />
        <div className="popup__error-container">
          <span className="popup__field-error email-field-error">{errors.email}</span>
        </div>
        <p className="popup__field-description">Password</p>
        <input
          onChange={handleChange}
          name='password'
          value={values.password || ''}
          autoComplete='off'
          className='popup__field'
          type="password"
          placeholder='Enter password'
          minLength='8'
          required />
        <div className="popup__error-container">
          <span className="popup__field-error password-field-error">{errors.password}</span>
        </div>
      </div>
    </PopupWithForm>
  )
}

export default RegisterPopup;