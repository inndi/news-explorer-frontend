import React, { useState } from 'react';

import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults(props) {
  const [isMore, setIsMore] = useState(false);

  const handleShowMorePosts = () => {
    props.handleShowMoreClick();
    setIsMore(true);
  };

  return (
    <section className='search-results'>
      <h2 className='search-results__title'>Search results</h2>
      <NewsCardList
        inactiveBtn={props.inactiveBtn}
        hoverBtn={props.hoverBtn}
        markedBtn={props.markedBtn}
        tooltipText='Sign in to save articles'
        homeIsActive={props.homeIsActive}
        newsCards={props.newsCards}
        moreCards={props.moreCards}
        isMore={isMore}
        isAuthorized={props.isAuthorized}
        handleSaveArticleSubmit={props.handleSaveArticleSubmit}
        handleDeleteArticleSubmit={props.handleDeleteArticleSubmit}
      />

      {(props.moreCards.length < 94) ?
        <button className='search-results__more-btn' onClick={handleShowMorePosts}>Show more</button> : undefined
      }
    </section>
  )
}

export default SearchResults;