import React, { useState, useEffect } from 'react';

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

      ></NewsCardList>
      <button className='search-results__more-btn' onClick={handleShowMorePosts}>Show more</button>
    </section>
  )
}

export default SearchResults;