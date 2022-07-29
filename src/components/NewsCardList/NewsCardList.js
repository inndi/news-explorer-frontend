import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(params) {
  return (
    <section className='news-cards'>
      <ul className='news-card__list'>
        <NewsCard />
      </ul>
    </section>
  )
}

export default NewsCardList;