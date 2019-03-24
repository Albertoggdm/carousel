import React, { Component } from 'react';
import Slide from '../Slide/Slide';

import arrow from './arrow.svg';

import './carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        {
          url: "https://via.placeholder.com/600/92c952",
          name: 'picture 0'
        },
        {
          url: "https://via.placeholder.com/600/771796",
          name: 'picture 1'
        },
        {
          url: "https://via.placeholder.com/600/24f355",
          name: 'picture 2'
        },
        {
          url: "https://via.placeholder.com/600/d32776",
          name: 'picture 3'
        }
      ],

      selectedId: 0,
      translateX: 0
    }
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  onClickPrev = () => {
    this.setState(prevState => ({
      selectedId: prevState.selectedId - 1,
      translateX: prevState.translateX + this.slideWidth()
    }))
  }

  onClickNext = () => {
    this.setState(prevState => ({
      selectedId: prevState.selectedId + 1,
      translateX: prevState.translateX - this.slideWidth()
    }));
  }

  render() {
    return (
      <div className="carousel">
        <h1 className="carousel__header">Carousel Component</h1>
        <div className="carousel__container">
          <div className="carousel__wrapper"
            style={{
              transform: `translateX(${this.state.translateX}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
            {
              this.state.images.map((image, i) => <Slide key={i} image={image} />)
            }
          </div>
          <ButtonPrev goToPrevSlide={this.onClickPrev} />
          <ButtonNext goToNextSlide={this.onClickNext} />

        </div>
      </div>
    )
  }
}

const ButtonPrev = (props) => {
  return (
    <div className="arrow arrow--left" onClick={props.goToPrevSlide}>
      <img className="arrow__img--left" src={arrow} alt="left"/>
    </div>
  );
}

const ButtonNext = (props) => {
  return (
    <div className="arrow arrow--right" onClick={props.goToNextSlide}>
      <img className="arrow__img--right" src={arrow} alt="right"/>
    </div>
  );
}

export default Carousel;
