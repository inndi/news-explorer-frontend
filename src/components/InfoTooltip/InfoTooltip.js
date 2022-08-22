import React from 'react';
import Popup from '../Popup/Popup';

function InfoTooltip(props) {
  return (
    <Popup
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <h2 className='popup__title popup__title_tooltip'>{props.title}</h2>
      <p className='popup__link-tooltip' onClick={props.onRedirect}>{props.redirectText}</p>
    </Popup >
  )
}

export default InfoTooltip;