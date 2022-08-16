import React, { useEffect } from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {


  return (
    <section className='news-cards'>
      <ul className='news-card__list'>
        {
          props.newsCards.slice(0, 3).map((newsCard) => (
            <NewsCard
              key={newsCard._id}
              newsCard={newsCard}
              inactiveBtn={props.inactiveBtn}
              hoverBtn={props.hoverBtn}
              tooltipText={props.tooltipText}
              homeIsActive={props.homeIsActive}
              markedBtn={props.markedBtn}

              isAuthorized={props.isAuthorized}
              handleSaveArticleSubmit={props.handleSaveArticleSubmit}///////////////////////////////////////////
            />


          ))}
        {props.isMore ?
          props.moreCards.map((newsCard) => (
            <NewsCard
              key={newsCard._id}
              newsCard={newsCard}
              inactiveBtn={props.inactiveBtn}
              hoverBtn={props.hoverBtn}
              tooltipText={props.tooltipText}
              homeIsActive={props.homeIsActive}
              markedBtn={props.markedBtn}

              isAuthorized={props.isAuthorized}
              handleSaveArticleSubmit={props.handleSaveArticleSubmit}///////////////////////////////////////////
            />
          )) : ''
        }
      </ul>
    </section>
  )
}

export default NewsCardList;