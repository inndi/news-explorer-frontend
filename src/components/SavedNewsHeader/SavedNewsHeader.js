import React from 'react';

function SavedNewsHeader(props) {
  return (
    <section className='saved-news-info'>
      <p className='saved-news-info__subtitle'>Saved articles</p>
      <h2 className='saved-news-info__title'>{props.name}, you have {props.savedArticles.length} saved articles</h2>
      <p className='saved-news-info__keywords-info'>By keywords:
        <span className='saved-news-info__keywords'> Nature, Yellowstone, and 2 other</span>
      </p>
    </section>
  )
}

export default SavedNewsHeader;