import React, { Component } from 'react';

import Carousel from './components/Carousel/Carousel'

import './App.css';


class App extends Component {
  render() {
    const desk = window.innerWidth > 800;
    return (
      <div className="App">
        <header className="App-header">
            <Carousel desk={desk}/>
        </header>
      </div>
    );
  }
}

export default App;
