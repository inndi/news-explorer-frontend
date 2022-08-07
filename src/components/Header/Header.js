import React from 'react';


function Header(props) {

  return (
    <div className='header'>
      <div className={`header__logo ${props.savedArticlesIsActive ? 'header__saved-articles-logo' : ''}`}></div>
      {/* <div className='header__navigation'> */}
      {props.children}
      {/* </div> */}
    </div>
  )
}

export default Header;