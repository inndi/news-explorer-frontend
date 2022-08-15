import React, { useState } from 'react';

function NewsCard(props) {

  const [isHover, setIsHover] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleMouseClick = () => {
    if (props.homeIsActive && isMarked === false) {
      setIsMarked(true);
    } else {
      setIsMarked(false);
    }
  };

  const boxStyle = {
    backgroundImage: isHover ? `url(${props.hoverBtn})` : `url(${props.inactiveBtn})`
  };

  const markedBoxStyle = {
    backgroundImage: `url(${props.markedBtn})`
  };

  // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // console.log(props.newsCard.publishedAt.toLocaleDateString('de-DE', options));

  return (
    <li className='card'>
      <div className='card__image-container'>
        <img className='card__image' src={props.newsCard.urlToImage} alt={props.newsCard.title} />
      </div>
      {!props.homeIsActive && <p className='card__keyword card__item_absolute'>propsKeyword</p>}
      <button className='card__btn card__item_absolute' style={isMarked ? markedBoxStyle : boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseClick}></button>
      <p className='card__tooltip card__item_absolute'>{props.tooltipText}</p>
      <div className='card__info-box'>
        <p className='card__date'>{props.newsCard.publishedAt}</p>
        <h2 className='card__title'>{props.newsCard.title}</h2>
        <p className='card__text'>{props.newsCard.description}</p>
        <p className='card__source'>{props.newsCard.source.name}</p>
      </div>
    </li >
  )
}

export default NewsCard;