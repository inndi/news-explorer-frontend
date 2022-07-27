import React from 'react';
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
import CardsInfo from '../CardsInfo/CardsInfo';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {

  const navigate = useNavigate();

  function handleHomeClick() {
    navigate.push('/');
  }

  function handleSavedArticlesClick() {
    navigate.push('/saved-news');
  }

  return (
    <div className="App">
      <Header>
        <div className='header__navigation'>
          <button className='header__nav-button'>Home</button>
          <button className='header__nav-button'>Saved articles</button>
          <button className='header__nav-button header__exit-button'>Elise</button>
        </div>
      </Header>


      <Main />

      <Footer />

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
