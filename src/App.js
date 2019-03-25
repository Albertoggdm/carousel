import React, { Component } from 'react';

import Carousel from './components/Carousel/Carousel'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Carousel />
        </header>
      </div>
    );
  }
}

export default App;
