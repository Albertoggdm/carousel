import React, { Component } from 'react';
import Slide from '../Slide/Slide';
import ArrowButton from '../ArrowButton/ArrowButton';

import './carousel.css';

const VISIBLE_SLIDES_ITEMS = 4;

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
        },
        {
          url: "https://via.placeholder.com/600/f66b97",
          name: 'picture 4'
        },
        {
          url: "https://via.placeholder.com/600/56a8c2",
          name: 'picture 5'
        },
        {
          url: "https://via.placeholder.com/600/b0f7cc",
          name: 'picture 6'
        },
        {
          url: "https://via.placeholder.com/600/54176f",
          name: 'picture 7'
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
    if(this.state.selectedId === 0) {
      return this.setState({
        selectedId: this.state.images.length - 1,
        translateX: this.props.desk?(-(this.slideWidth() * (this.state.images.length - VISIBLE_SLIDES_ITEMS))):-(this.slideWidth() * (this.state.images.length-1))
      })
    }

    this.setState(prevState => ({
      selectedId: prevState.selectedId - 1,
      translateX: this.translationCalcPrev(prevState)
    }))
  }

  translationCalcPrev = (prevState) => {
    let translation = prevState.translateX + this.slideWidth();

    if (this.props.desk && (((prevState.selectedId - 1) + (prevState.translateX/this.slideWidth())) >= 0)) {
      return prevState.translateX;
    }
    return translation;
  }

  onClickNext = () => {
    if(this.state.selectedId === this.state.images.length - 1) {
      return this.setState({
        selectedId: 0,
        translateX: 0
      })
    }

    this.setState(prevState => ({
      selectedId: prevState.selectedId + 1,
      translateX: this.translationCalcNext(prevState)
    }));
  }

  translationCalcNext = (prevState) => {
    let translation = prevState.translateX  - this.slideWidth();

    if (this.props.desk && (((prevState.selectedId + 1) + (prevState.translateX/this.slideWidth())) < VISIBLE_SLIDES_ITEMS)) {
      return prevState.translateX;
    }
    return translation;
  }

  renderMobile() {
    return (
      <div className="carousel">
        <h1 className="carousel__header">Carousel Mobile</h1>
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
          <ArrowButton direction='prev' onClickHandler={this.onClickPrev} />
          <ArrowButton direction='next' onClickHandler={this.onClickNext} />
        </div>
      </div>
    )
  }

  renderDesk() {
    return (
      <div className="carousel">
        <h1 className="carousel__header">Carousel Desktop</h1>
        <div className="carousel__container--desk">
          <div className="carousel__wrapper--desk"
            style={{
              transform: `translateX(${this.state.translateX}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
            {
              this.state.images.map((image, i) => <Slide key={i} image={image} selected={i===this.state.selectedId}/>)
            }
          </div>
          <ArrowButton direction='prev' onClickHandler={this.onClickPrev} />
          <ArrowButton direction='next' onClickHandler={this.onClickNext} />
        </div>
      </div>
    )
  }

  render() {
    if(this.props.desk)
      return this.renderDesk()

    return this.renderMobile()
  }

}

export default Carousel;
