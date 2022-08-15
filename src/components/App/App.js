import React, { useState, useEffect } from 'react';
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
import * as newsApi from '../../utils/NewsApi';
let arrayForHoldingNewsCards = [];

function App() {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [homeIsActive, setHomeIsActive] = useState(true);
  const [savedArticlesIsActive, setSavedArticlesIsActive] = useState(false);

  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(true);

  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
  const [isNothingFoundOpen, setIsNothingFoundOpen] = useState(false);
  const [isSearchResultOpen, setIsSearchResultOpen] = useState(false);

  const [newsCards, setNewsCards] = useState([]);

  const [moreCards, setMoreCards] = useState([]);
  const [nextAmountOfCards, setNextAmountOfCards] = useState(3);

  const navigate = useNavigate();

  function handleSigninClick() {
    setIsLoginPopupOpen(true);
  }

  function handleRegistrationSubmitClick() {
    setIsRegistrationSuccessful(true);
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
    setIsRegistrationSuccessful(false);
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


  function handleSearchSubmit(keyword) {
    setIsSearchResultOpen(false);
    setIsNothingFoundOpen(false);
    arrayForHoldingNewsCards = [];
    setIsPreloaderOpen(true);

    newsApi.getNews(keyword)
      .then((newsCards) => {

        console.log(newsCards)

        setIsPreloaderOpen(false);
        if (newsCards.totalResults !== 0) {
          setIsSearchResultOpen(true);
          setNewsCards(newsCards.articles);
        } else {
          setIsNothingFoundOpen(true);
        }

      })
    // .catch(next)
  }

  function addMoreCards(start, end) {
    const slicedPosts = newsCards.slice(start, end);
    arrayForHoldingNewsCards = [...arrayForHoldingNewsCards, ...slicedPosts];
    return arrayForHoldingNewsCards;
  };

  function handleShowMoreClick() {
    setMoreCards(addMoreCards(nextAmountOfCards, nextAmountOfCards + 3));
    setNextAmountOfCards(nextAmountOfCards + 3);
  };

  return (
    <div className={`App ${savedArticlesIsActive ? 'app_bg-white' : 'app_bg-img'}`} >
      <Favicon url={favicon}></Favicon>
      <Routes>

        <Route path='/saved-news' element={
          <div>
            <Header savedArticlesIsActive={savedArticlesIsActive}>
              <ul className='header__navigation-list'>
                <li className='header__nav-item header__nav-item_black' onClick={handleHomeClick}>Home</li>
                <li className={`header__nav-item header__nav-item_black ${savedArticlesIsActive ? 'header__nav-item_active-black' : ''}`}>Saved articles</li>
                <li className='header__exit-item header__exit-item_black' onClick={handleEliseClick}>Elise</li>
              </ul>
            </Header>
            <SavedNewsHeader />
            <NewsCardList
              inactiveBtn={inactiveTrash}
              hoverBtn={hoverTrash}
              tooltipText='Remove from saved'
            >

            </NewsCardList>
            <Footer
              handleHomeClick={handleHomeClick} />

          </div>
        } />

        <Route path='/' element={
          <div>
            <Header
            >{isAuthorized
              ?
              <ul className='header__navigation-list'>
                <li className={`header__nav-item ${homeIsActive ? 'header__nav-item_active-white' : ''}`}>Home</li>
                <li className='header__nav-item' onClick={handleSavedArticlesClick}>Saved articles</li>
                <li className='header__exit-item' onClick={handleEliseClick}>Elise</li>
              </ul>
              :
              <ul className='header__navigation-list'>
                <li className='header__nav-item header__nav-item_active-white'>Home</li>
                <li className='header__nav-item header__auth-item' onClick={handleSigninClick}>Sign in</li>
              </ul>
              }
            </Header>
            <Main
              inactiveBtn={inactiveBookmark}
              hoverBtn={hoverBookmark}
              markedBtn={markedBookmark}
              homeIsActive={homeIsActive}
              onSearchClick={handleSearchSubmit}
              isPreloaderOpen={isPreloaderOpen}
              isSearchResultOpen={isSearchResultOpen}
              isNothingFoundOpen={isNothingFoundOpen}
              newsCards={newsCards}
              handleShowMoreClick={handleShowMoreClick}
              moreCards={moreCards}
            />
            <Footer />
            <RegisterPopup
              isOpen={isRegisterPopupOpen}
              onClose={closeAllPopups}
              onRedirect={handleRedirectAuth}
              onRegisterSubmit={handleRegistrationSubmitClick}
            ></RegisterPopup>

            <LoginPopup
              isOpen={isLoginPopupOpen}
              onClose={closeAllPopups}
              onRedirect={handleRedirectAuth}
            ></LoginPopup>

            {(isRegistrationSuccessful)
              &&
              <InfoTooltip
                isOpen={isInfoTooltipOpen}
                onClose={closeAllPopups}
                onRedirect={handleRedirectAuth}
                title='Registration successfully completed!'
                redirectText='Sign in'
              ></InfoTooltip>
            }


          </div>
        } />

      </Routes>
    </div >
  );
}

export default App;
