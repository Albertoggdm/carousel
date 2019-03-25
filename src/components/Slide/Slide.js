import React from 'react';

import './slide.css';

const defaultImage = {name: '', url: ''};

const Slide = ({ image=defaultImage, selected=false }) => {
  const imageUrl = {
    backgroundImage: `url(${image.url})`,
  }

  return (
    <div className={`slide ${selected ? 'slide--selected' : ''}`} style={imageUrl}>
      <h4 className={`slide__caption ${selected ? 'slide__caption--selected' : ''}`}>
        {image.name}
      </h4>
    </div>
  )
}

export default Slide;
