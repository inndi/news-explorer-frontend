import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
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

  const history = useHistory();

  function handleHomeClick() {
    history.push('/');
  }

  function handleSavedArticlesClick() {
    history.push('/saved-news');
  }

  return (
    <div className="App">
      <Switch>

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

      </Switch>
    </div >
  );
}

export default App;
