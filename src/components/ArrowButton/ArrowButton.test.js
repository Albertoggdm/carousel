import React from 'react';
import ReactDOM from 'react-dom';
import ArrowButton from './ArrowButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArrowButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
