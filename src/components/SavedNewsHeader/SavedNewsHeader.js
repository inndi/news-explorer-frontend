import React, { useContext } from 'react';

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsHeader(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className='saved-news-info'>
      <p className='saved-news-info__subtitle'>Saved articles</p>
      <h2 className='saved-news-info__title'>{currentUser.name}, you have {props.savedArticles.length} saved articles</h2>
      <p className='saved-news-info__keywords-info'>By keywords:
        <span className='saved-news-info__keywords'> {props.topOfKeywords[0]}, {props.topOfKeywords[1]}
          {(props.topOfKeywords.length === 3) && `, ${props.topOfKeywords[2]}`}
          {(props.topOfKeywords.length > 3) && ` and ${props.topOfKeywords.length - 2} other`}</span>
      </p>
    </section>
  )
}

export default SavedNewsHeader;