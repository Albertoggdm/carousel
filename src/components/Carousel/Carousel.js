import React, { Component } from 'react';
import axios from 'axios';

import Slide from '../Slide/Slide';
import ArrowButton from '../ArrowButton/ArrowButton';

import './carousel.css';

const VISIBLE_SLIDES_ITEMS = 4;
const MOBILE_BREAKPOINT = 800;

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      widthScreen: window.innerWidth,
      desktop: window.innerWidth > MOBILE_BREAKPOINT,
      selectedId: 0,
      translateX: 0
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ widthScreen: window.innerWidth, desktop: window.innerWidth > MOBILE_BREAKPOINT });
  };

  componentDidMount() {
    axios.get(`https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo`)
      .then(res => {
        const images = res.data.hits.map(picture => {return { url: picture.webformatURL, name: picture.user, likes: picture.likes}});

        this.setState({ images });
      })
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  onClickPrev = () => {
    if(this.state.selectedId === 0) {
      return this.setState({
        selectedId: this.state.images.length - 1,
        translateX: this.state.desktop?(-(this.slideWidth() * (this.state.images.length - VISIBLE_SLIDES_ITEMS))):-(this.slideWidth() * (this.state.images.length-1))
      })
    }

    this.setState(prevState => ({
      selectedId: prevState.selectedId - 1,
      translateX: this.translationCalcPrev(prevState)
    }))
  }

  translationCalcPrev = (prevState) => {
    let translation = prevState.translateX + this.slideWidth();

    if (this.state.desktop && (((prevState.selectedId - 1) + (prevState.translateX/this.slideWidth())) >= 0)) {
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

    if (this.state.desktop && (((prevState.selectedId + 1) + (prevState.translateX/this.slideWidth())) < VISIBLE_SLIDES_ITEMS)) {
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
    if(this.state.desktop)
      return this.renderDesk()

    return this.renderMobile()
  }

}

export default Carousel;
