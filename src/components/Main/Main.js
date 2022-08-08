import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';

import About from '../About/About';

function Main(props) {
  return (
    <main className='main-content'>
      <SearchForm />
      <SearchResults
        inactiveBtn={props.inactiveBtn}
        hoverBtn={props.hoverBtn}
        homeIsActive={props.homeIsActive}
      ></SearchResults>
      <Preloader></Preloader>
      <About />
    </main>
  )
}

export default Main;