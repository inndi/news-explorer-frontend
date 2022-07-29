import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// import logo from './logo.svg';
import '../../index.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [homeIsActive, setHomeIsActive] = useState(false);
  const [savedArticlesIsActive, setSavedArticlesIsActive] = useState(true);

  const navigate = useNavigate();

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

  return (
    <div className="App">
      <Routes>

        <Route path='/saved-news' element={
          <div>
            <Header savedArticlesIsActive={savedArticlesIsActive}>
              <div className='header__navigation'>
                <button className='header__nav-button header__nav-button_black' onClick={handleHomeClick}>Home</button>
                <button className={`header__nav-button header__nav-button_black ${savedArticlesIsActive ? 'header__nav-button_active-black' : ''}`}>Saved articles</button>
                <button className='header__exit-button header__exit-button_black'>Elise</button>
              </div>
            </Header>
            <SavedNewsHeader />
            <NewsCardList>

            </NewsCardList>
            <Footer />

          </div>
        } />




        <Route path='/' element={
          <div>
            <Header>{isAuthorized
              ?
              <div className='header__navigation'>
                <button className={`header__nav-button ${homeIsActive ? 'header__nav-button_active-white' : ''}`}>Home</button>
                <button className='header__nav-button' onClick={handleSavedArticlesClick}>Saved articles</button>
                <button className='header__exit-button'>Elise</button>
              </div>
              :
              <div className='header__navigation'>
                <button className={`header__nav-button ${homeIsActive ? 'header__nav-button_active-white' : ''}`}>Home</button>
                <button className='header__nav-button header__auth-button'>Sign in</button>
              </div>
            }
            </Header>
            <Main />
            <Footer />
          </div>
        } />

      </Routes>

      {/* <Routes>

        <Route path='/saved-news'>
          <Header>
            <Navigation>
              ? :
            </Navigation>
          </Header>

          <Main>
            <CardsInfo></CardsInfo>

            <NewsCardList>
              <NewsCard></NewsCard>
            </NewsCardList>
          </Main>

          <Footer></Footer>
        </Route>

        <Route path='/'>

          <Header>
            <Navigation></Navigation>
          </Header>

          <Main>
            <SearchForm>
              <NewsCardList>
                <NewsCard></NewsCard>
              </NewsCardList>

              <Preloader></Preloader>
            </SearchForm>

            <About></About>
          </Main>

          <Footer></Footer>
        </Route>

      </Routes> */}
    </div >
  );
}

export default App;
