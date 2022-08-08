import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults(props) {
  return (
    <section className='search-results'>
      <h2 className='search-results__title'>Search results</h2>
      <NewsCardList
        inactiveBtn={props.inactiveBtn}
        hoverBtn={props.hoverBtn}
        markedBtn={props.markedBtn}
        tooltipText='Sign in to save articles'
        homeIsActive={props.homeIsActive}
      ></NewsCardList>
      <button className='search-results__more-btn'>Show more</button>
    </section>
  )
}

export default SearchResults;