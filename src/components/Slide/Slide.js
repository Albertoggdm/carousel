import React from 'react';

import './slide.css';

const Slide = ({ image }) => {
  const imageUrl = {
    backgroundImage: `url(${image.url})`,
  }

  return (
    <div className="slide" style={imageUrl}>
      <h4 className="slide__caption">
        {image.name}
      </h4>
    </div>
  )
}

export default Slide;
