import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import NotFoundSection from '../NotFoundSection/NotFoundSection';

import About from '../About/About';

function Main(props) {
  return (
    <main className='main-content'>
      <SearchForm
        onSearchClick={props.onSearchClick} />
      {/* <SearchResults
        inactiveBtn={props.inactiveBtn}
        hoverBtn={props.hoverBtn}
        markedBtn={props.markedBtn}
        homeIsActive={props.homeIsActive}
      ></SearchResults> */}
      {props.isPreloaderOpen ? <Preloader></Preloader> : ''}

      {/* <NotFoundSection></NotFoundSection> */}
      <About />
    </main>
  )
}

export default Main;