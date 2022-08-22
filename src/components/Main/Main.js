import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../Preloader/Preloader';
import NotFoundSection from '../NotFoundSection/NotFoundSection';
import About from '../About/About';
import ReceivingErrorSection from '../ReceivingError/ReceivingError';

function Main(props) {

  return (
    <main className='main-content'>
      <SearchForm
        onSearchClick={props.onSearchClick}
        arrayForHoldingPosts={props.arrayForHoldingPosts} />

      {props.isSearchResultOpen ? <SearchResults
        inactiveBtn={props.inactiveBtn}
        hoverBtn={props.hoverBtn}
        markedBtn={props.markedBtn}
        homeIsActive={props.homeIsActive}
        newsCards={props.newsCards}

        handleShowMoreClick={props.handleShowMoreClick}
        moreCards={props.moreCards}

        isAuthorized={props.isAuthorized}
        handleSaveArticleSubmit={props.handleSaveArticleSubmit}
        handleDeleteArticleSubmit={props.handleDeleteArticleSubmit} /> : undefined}

      {props.isReceivingError ? <ReceivingErrorSection /> : undefined}

      {props.isPreloaderOpen ? <Preloader /> : undefined}

      {props.isNothingFoundOpen ? <NotFoundSection /> : undefined}
      <About />
    </main>
  )
}

export default Main;