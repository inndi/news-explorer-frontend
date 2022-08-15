import React, { useState, useEffect } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

let arrayForHoldingPosts = [];

function SearchResults(props) {
  const [isMore, setIsMore] = useState(false);

  const [moreCards, setMoreCards] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = props.newsCards.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setMoreCards(arrayForHoldingPosts);
  };

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + 3);
    setNext(next + 3);
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

        moreCards={moreCards}
        isMore={isMore}

      ></NewsCardList>
      <button className='search-results__more-btn' onClick={handleShowMorePosts}>Show more</button>
    </section>
  )
}

export default SearchResults;