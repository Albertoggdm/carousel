import React from 'react';
import arrow from './arrow.svg';

import './arrowButton.css';

const ArrowButton = ({ direction, onClickHandler}) => {

  if ( direction === 'next') {
    return (
      <div className="arrow arrow--right" onClick={onClickHandler}>
        <img className="arrow__img--right" src={arrow} alt="right"/>
      </div>
    )
  }
  else if ( direction === 'prev'){
    return (
      <div className="arrow arrow--left" onClick={onClickHandler}>
        <img className="arrow__img--left" src={arrow} alt="left"/>
      </div>
    )
  }
  else {
    return null
  }
}

export default ArrowButton;
