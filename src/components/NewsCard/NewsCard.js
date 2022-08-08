import React, { useState } from 'react';
import propsCardImg from '../../images/card-card-image_06.png';

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

  return (
    <li className='card'>
      <div className='card__image-container'>
        <img className='card__image' src={propsCardImg} alt="props-title" />
      </div>
      {!props.homeIsActive && <p className='card__keyword element-absolute_style'>propsKeyword</p>}
      <button className='card__btn element-absolute_style' style={isMarked ? markedBoxStyle : boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseClick}></button>
      <p className='card__tooltip element-absolute_style'>{props.tooltipText}</p>
      <div className='card__info-box'>
        <p className='card__date'>November 4, 2020</p>
        <h2 className='card__title'>Everyone Needs a Special 'Sit Spot' in Nature fffffffff fffnhyjn</h2>
        <p className='card__text'>Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find vvvvvvvvvv</p>
        <p className='card__source'>treehugger</p>
      </div>
    </li >
  )
}

export default NewsCard;