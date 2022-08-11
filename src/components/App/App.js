import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Favicon from "react-favicon";

import '../../index.css';

import inactiveTrash from '../../images/icon-trash-inactive.svg';
import hoverTrash from '../../images/card-icon-trash.svg';

import inactiveBookmark from '../../images/card-icon-bookmark-inactive.svg';
import hoverBookmark from '../../images/card-icon-bookmark-hover.svg';
import markedBookmark from '../../images/icon-bookmark-marked.svg';

import favicon from '../../images/Favicon.svg';

import Header from '../Header/Header';
import Main from '../Main/Main';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import LoginPopup from '../LoginPopup/LoginPopup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [homeIsActive, setHomeIsActive] = useState(true);
  const [savedArticlesIsActive, setSavedArticlesIsActive] = useState(false);

  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(true);

  const navigate = useNavigate();

  function handleSigninClick() {
    setIsLoginPopupOpen(true);
  }

  function handleHomeClick() {
    navigate('/');
    setHomeIsActive(true);
    setSavedArticlesIsActive(false);
  }

  function handleSavedArticlesClick() {
    navigate('/saved-news');
    setSavedArticlesIsActive(true);
    setHomeIsActive(false);
  }

  function handleEliseClick() {
    setIsAuthorized(false);
    setSavedArticlesIsActive(false);
    setHomeIsActive(true);
    navigate('/');
  }

  function closeAllPopups() {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsInfoTooltipOpen(false);
  }

  function handleRedirectAuth() {
    if (isRegisterPopupOpen) {
      closeAllPopups();
      setIsLoginPopupOpen(true);
      setIsRegisterPopupOpen(false);
    } else if (isLoginPopupOpen) {
      closeAllPopups();
      setIsRegisterPopupOpen(true);
      setIsLoginPopupOpen(false);
    }
  }

  return (
    <div className={`App ${savedArticlesIsActive ? 'app__bg_white' : 'app__bg_img'}`} >
      <Favicon url={favicon}></Favicon>
      <Routes>

        <Route path='/saved-news' element={
          <div>
            <Header savedArticlesIsActive={savedArticlesIsActive}>
              <div className='header__navigation'>
                <button className='header__nav-button header__nav-button_black' onClick={handleHomeClick}>Home</button>
                <button className={`header__nav-button header__nav-button_black ${savedArticlesIsActive ? 'header__nav-button_active-black' : ''}`}>Saved articles</button>
                <button className='header__exit-button header__exit-button_black' onClick={handleEliseClick}>Elise</button>
              </div>
            </Header>
            <SavedNewsHeader />
            <NewsCardList
              inactiveBtn={inactiveTrash}
              hoverBtn={hoverTrash}
              tooltipText='Remove from saved'
            >

            </NewsCardList>
            <Footer />

          </div>
        } />

        <Route path='/' element={
          <div>
            <Header
            >{isAuthorized
              ?
              <div className='header__navigation'>
                <button className={`header__nav-button ${homeIsActive ? 'header__nav-button_active-white' : ''}`}>Home</button>
                <button className='header__nav-button' onClick={handleSavedArticlesClick}>Saved articles</button>
                <button className='header__exit-button' onClick={handleEliseClick}>Elise</button>
              </div>
              :
              <div className='header__navigation'>
                <button className='header__nav-button header__nav-button_active-white'>Home</button>
                <button className='header__nav-button header__auth-button' onClick={handleSigninClick}>Sign in</button>
              </div>
              }
            </Header>
            <Main
              inactiveBtn={inactiveBookmark}
              hoverBtn={hoverBookmark}
              markedBtn={markedBookmark}
              homeIsActive={homeIsActive}
            />
            <Footer />
            <RegisterPopup
              isOpen={isRegisterPopupOpen}
              onClose={closeAllPopups}
              onRedirect={handleRedirectAuth}
            ></RegisterPopup>

            <LoginPopup
              isOpen={isLoginPopupOpen}
              onClose={closeAllPopups}
              onRedirect={handleRedirectAuth}
            ></LoginPopup>

            {/* <InfoTooltip
              isOpen={isInfoTooltipOpen}
              onClose={closeAllPopups}
              onRedirect={handleRedirectAuth}
              title='Registration successfully completed!'
              redirectText='Sign in'
            ></InfoTooltip> */}

          </div>
        } />

      </Routes>
    </div >
  );
}

export default App;
