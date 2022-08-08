import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  return (
    <section className='news-cards'>
      <ul className='news-card__list'>
        <NewsCard inactiveBtn={props.inactiveBtn} hoverBtn={props.hoverBtn}
          tooltipText={props.tooltipText} homeIsActive={props.homeIsActive} />
        <NewsCard inactiveBtn={props.inactiveBtn} hoverBtn={props.hoverBtn} />
        <NewsCard inactiveBtn={props.inactiveBtn} hoverBtn={props.hoverBtn} />
        <NewsCard inactiveBtn={props.inactiveBtn} hoverBtn={props.hoverBtn} />
        <NewsCard inactiveBtn={props.inactiveBtn} hoverBtn={props.hoverBtn} />
      </ul>
    </section>
  )
}

export default NewsCardList;