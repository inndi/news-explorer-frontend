import React from 'react';


function Header(props) {

  return (
    <div className='header'>
      <div className='header__logo'></div>
      {/* <div className='header__navigation'> */}
      {props.children}
      {/* </div> */}
    </div>
  )
}

export default Header;