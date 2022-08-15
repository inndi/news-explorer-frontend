import React, { useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import NotFoundSection from '../NotFoundSection/NotFoundSection';
import About from '../About/About';

function Main(props) {

  return (
    <main className='main-content'>
      <SearchForm
        onSearchClick={props.onSearchClick}
        arrayForHoldingPosts={props.arrayForHoldingPosts}
      />

      {props.isSearchResultOpen ? <SearchResults
        inactiveBtn={props.inactiveBtn}
        hoverBtn={props.hoverBtn}
        markedBtn={props.markedBtn}
        homeIsActive={props.homeIsActive}
        newsCards={props.newsCards}

        handleShowMoreClick={props.handleShowMoreClick}
        moreCards={props.moreCards}
      /> : ''}

      {props.isPreloaderOpen ? <Preloader /> : ''}

      {props.isNothingFoundOpen ? <NotFoundSection /> : ''}
      <About />
    </main>
  )
}

export default Main;