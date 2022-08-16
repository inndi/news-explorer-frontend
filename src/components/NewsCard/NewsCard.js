import React, { useState } from 'react';

function NewsCard(props) {
  const [isHover, setIsHover] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  const boxStyle = {
    backgroundImage: isHover ? `url(${props.hoverBtn})` : `url(${props.inactiveBtn})`
  };
  const markedBoxStyle = {
    backgroundImage: `url(${props.markedBtn})`
  };
  const months = [
    { num: '01', name: "January" },
    { num: '02', name: "February" },
    { num: '03', name: "March" },
    { num: '04', name: "April" },
    { num: '05', name: "May" },
    { num: '06', name: "June" },
    { num: '07', name: "July" },
    { num: '08', name: "August" },
    { num: '09', name: "September" },
    { num: '10', name: "October" },
    { num: '11', name: "November" },
    { num: '12', name: "December" }
  ];

  const selectedMonthName = months.find((month) => month.num === `${props.newsCard.publishedAt.slice(5, 7)}`);
  let year = `${selectedMonthName.name} ${props.newsCard.publishedAt.slice(8, 10)}, ${props.newsCard.publishedAt.slice(0, 4)}`;

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleSaveArticleClick = (e) => {
    if (props.homeIsActive && isMarked === false) {
      setIsMarked(true);
      props.handleSaveArticleSubmit(props.newsCard);
    } else {
      setIsMarked(false);
    }
  };

  return (
    <li className='card'>
      <div className='card__image-container'>
        <img className='card__image' src={props.newsCard.urlToImage} alt={props.newsCard.title} />
      </div>
      {!props.homeIsActive && <p className='card__keyword card__item_absolute'>propsKeyword</p>}
      <button className='card__btn card__item_absolute' style={isMarked ? markedBoxStyle : boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={props.isAuthorized ? handleSaveArticleClick : undefined}></button>
      {!props.isAuthorized ? <p className='card__tooltip card__item_absolute'>{props.tooltipText}</p> : undefined}
      <div className='card__info-box'>
        <p className='card__date'>{year}</p>
        <h2 className='card__title'>{props.newsCard.title}</h2>
        <p className='card__text'>{props.newsCard.description}</p>
        <p className='card__source'>{props.newsCard.source.name}</p>
      </div>
    </li >
  )
}

export default NewsCard;