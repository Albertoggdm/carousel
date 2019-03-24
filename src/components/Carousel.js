import React, { Component } from 'react';

class Carousel extends React.Component {
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

      selectedIndext: 0
    }
  }

  render() {
    return <div>Carousel Component</div>
  }
}

export default Carousel;
