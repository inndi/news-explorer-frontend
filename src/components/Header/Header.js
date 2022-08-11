import React, { useState } from 'react';

function Header(props) {

  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  function handleMenuClick() {
    if (isVisibleMenu) {
      setIsVisibleMenu(false);
      console.log('bla1');
    } else {
      setIsVisibleMenu(true);
      console.log('bla2');
    }
  }

  return (
    <div className={`${isVisibleMenu ? 'overlay_active' : ''}`}>
      <div className='header'>
        <div className={`header__logo ${props.savedArticlesIsActive ? 'header__saved-articles-logo' : ''}`}></div>
        <nav className={`header__navigation ${props.savedArticlesIsActive ? 'header__saved-articles-nav' : ''}`}
          onClick={handleMenuClick}>
          {props.children}
        </nav>
      </div>
    </div>
  )
}

export default Header;