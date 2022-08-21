import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as newsApi from '../../utils/NewsApi';
import * as mainApi from '../../utils/MainApi';

let arrayForHoldingNewsCards = [];
let currentUser = {};



function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
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

  const [isReceivingError, setIsReceivingError] = useState(false);
  const [keyword, setKeyword] = useState('');

  const [token, setToken] = useState();
  const [savedArticles, setSavedArticles] = useState([]);

  const [isAuthError, setIsAuthError] = useState('');
  const [topOfKeywords, setTopOfKeywords] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (token) {
      mainApi.setToken(token);
    }
    else {
      tokenCheck();
    }

  }, [token]);

  // useEffect(() => {
  //   if (location.pathname === '/saved-news') {
  //     setSavedArticlesIsActive(true);
  //     setHomeIsActive(false);
  //   }
  // }, []);

  function handleSigninClick() {
    setIsLoginPopupOpen(true);
  }

  function handleRegisterSubmitClick(email, password, username) {
    mainApi.register(email, password, username)
      .then((res) => {
        closeAllPopups();
        setIsInfoTooltipOpen(true);
        setIsRegistrationSuccessful(true);
      })
      .catch((err) => {
        setIsAuthError(`${err}`);
      })

  }

  function handleLoginSubmitClick(email, password) {
    if (!email || !password) {
      return;
    }
    mainApi.login(email, password)
      .then((res) => {
        closeAllPopups();
        setIsAuthorized(true);
        setToken(res.token);
        tokenCheck();
      })
      .catch((err) => {
        console.log(err);
        setIsAuthError(`${err}`);
      })
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      if (!token) {
        setToken(jwt);
      }
      setIsAuthorized(true);
      if (location.pathname === '/saved-news') {
        setSavedArticlesIsActive(true);
        setHomeIsActive(false);
      }

      mainApi.setToken(jwt);
      mainApi.getCurrentUser()
        .then((res) => {
          currentUser = res;
        })
        .catch((err) => {
          console.log(err);
        });

      mainApi.getSavedArticles()
        .then((articles) => {
          setSavedArticles(articles.reverse());
          countTopOfKeywords(articles);
        })
        .catch((err) => {
          console.log(err);
        });

    }
    else {
      if (isAuthorized) {
        setIsAuthorized(false);
      }
    }

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
    tokenCheck();
  }

  function countTopOfKeywords(articles) {
    let keywords = articles.map((article) => { return article.keyword });

    let counts = keywords.reduce((counts, num) => {
      counts[num] = (counts[num] || 0) + 1;
      return counts;
    }, {});

    const result = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

    setTopOfKeywords(result);
  }


  function handleEliseClick() {
    setIsAuthorized(false);
    setSavedArticlesIsActive(false);
    setHomeIsActive(true);
    navigate('/');
    localStorage.removeItem('jwt');
    currentUser = {};
    setToken();
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
    } else {
      setIsLoginPopupOpen(true);
    }
  }


  function handleSearchSubmit(keyword) {
    setIsSearchResultOpen(false);
    setIsNothingFoundOpen(false);
    arrayForHoldingNewsCards = [];
    setIsPreloaderOpen(true);

    setIsReceivingError(false);
    setKeyword(keyword);

    newsApi.getNews(keyword)
      .then((newsCards) => {
        setIsPreloaderOpen(false);
        if (newsCards.totalResults !== 0) {
          setIsSearchResultOpen(true);
          setNewsCards(newsCards.articles);
        } else if (newsCards.totalResults === 0) {
          setIsNothingFoundOpen(true);
        }

      })
      .catch((err) => {
        console.log(err);
        setIsReceivingError(true);
      })
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

  function handleSaveArticleSubmit(article) {
    console.log(article);
    if (isAuthorized) {
      mainApi.postArticle(keyword, article)
        .catch((err) => { console.log(err) })
    } else {
      setIsLoginPopupOpen(true);
    }
  }


  function handleDeleteArticleSubmit(currentArticle) {
    if (isAuthorized) {
      mainApi.getSavedArticles()
        .then((articles) => {
          articles = articles.filter((article) => article.link === currentArticle.url);
          mainApi.deleteArticle(articles[articles.length - 1]._id)
            .then((res) => {
            })
            .catch((err) => { console.log(err) })
        })
        .catch((err) => {
          console.log(err);
        })
      if (savedArticlesIsActive) {
        mainApi.deleteArticle(currentArticle._id)
          .then((res) => {
            const newArticles = savedArticles.filter((article) => article._id !== currentArticle._id);
            setSavedArticles(newArticles);
          })
          .catch((err) => { console.log(err) })
      }
    }
  }

  return (
    <div className='App' >
      <Favicon url={favicon}></Favicon>
      <Routes>
        <Route path='/saved-news' element={
          <ProtectedRoute isAuthorized={isAuthorized}>
            <div className='savedArticles-page'>
              <Header savedArticlesIsActive={savedArticlesIsActive}>
                <ul className='header__navigation-list'>
                  <li className='header__nav-item header__nav-item_black' onClick={handleHomeClick}>Home</li>
                  <li className={`header__nav-item header__nav-item_black ${savedArticlesIsActive ? 'header__nav-item_active-black' : ''}`}>Saved articles</li>
                  <li className='header__exit-item header__exit-item_black' onClick={handleEliseClick}>Elise</li>
                </ul>
              </Header>
              <SavedNewsHeader
                name={currentUser.name}
                savedArticles={savedArticles}
                topOfKeywords={topOfKeywords} />
              <NewsCardList
                inactiveBtn={inactiveTrash}
                hoverBtn={hoverTrash}
                tooltipText='Remove from saved'
                savedArticles={savedArticles}
                handleDeleteArticleSubmit={handleDeleteArticleSubmit}
              >

              </NewsCardList>
              <Footer
                handleHomeClick={handleHomeClick} />

            </div>
          </ProtectedRoute>
        } />


        <Route path='/' element={
          <div className='home-page'>
            <Header>
              {isAuthorized
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

              isAuthorized={isAuthorized}
              isReceivingError={isReceivingError}

              handleSaveArticleSubmit={handleSaveArticleSubmit}
              handleDeleteArticleSubmit={handleDeleteArticleSubmit}

            // savedArticles={savedArticles}

            />
            <Footer />
            {isRegistrationSuccessful && <InfoTooltip
              isOpen={isInfoTooltipOpen}
              onClose={closeAllPopups}
              onRedirect={handleRedirectAuth}
              title='Registration successfully completed!'
              redirectText='Sign in'
            />}

            <RegisterPopup
              isOpen={isRegisterPopupOpen}
              onClose={closeAllPopups}
              onRedirect={handleRedirectAuth}
              onRegisterSubmit={handleRegisterSubmitClick}
              isAuthError={isAuthError}
            ></RegisterPopup>

            <LoginPopup
              isOpen={isLoginPopupOpen}
              onClose={closeAllPopups}
              onRedirect={handleRedirectAuth}
              onLoginSubmit={handleLoginSubmitClick}
              isAuthError={isAuthError}
            ></LoginPopup>




          </div>
        } />

      </Routes>
    </div >
  );
}

export default App;
