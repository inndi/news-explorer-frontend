import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  return (
    <section className='news-cards'>
      <ul className='news-card__list'>
        {props.homeIsActive
          ? props.newsCards.slice(0, 3).map((newsCard) => (
            <NewsCard
              key={newsCard.url}
              newsCard={newsCard}
              inactiveBtn={props.inactiveBtn}
              hoverBtn={props.hoverBtn}
              tooltipText={props.tooltipText}
              homeIsActive={props.homeIsActive}
              markedBtn={props.markedBtn}

              // savedArticles={props.savedArticles}

              isAuthorized={props.isAuthorized}
              handleSaveArticleSubmit={props.handleSaveArticleSubmit}
              handleDeleteArticleSubmit={props.handleDeleteArticleSubmit}

            />))
          : props.savedArticles.map((newsCard) => (
            <NewsCard
              key={newsCard._id}
              newsCard={newsCard}
              inactiveBtn={props.inactiveBtn}
              hoverBtn={props.hoverBtn}
              tooltipText={props.tooltipText}
              homeIsActive={props.homeIsActive}
              markedBtn={props.markedBtn}

              isAuthorized={props.isAuthorized}
              handleSaveArticleSubmit={props.handleSaveArticleSubmit}
              handleDeleteArticleSubmit={props.handleDeleteArticleSubmit}

            />))
        }

        {props.isMore ?
          props.moreCards.map((newsCard) => (
            <NewsCard
              key={newsCard.url}
              newsCard={newsCard}
              inactiveBtn={props.inactiveBtn}
              hoverBtn={props.hoverBtn}
              tooltipText={props.tooltipText}
              homeIsActive={props.homeIsActive}
              markedBtn={props.markedBtn}

              isAuthorized={props.isAuthorized}
              handleSaveArticleSubmit={props.handleSaveArticleSubmit}
              handleDeleteArticleSubmit={props.handleDeleteArticleSubmit}

            />
          )) : undefined
        }
      </ul>
    </section>
  )
}

export default NewsCardList;