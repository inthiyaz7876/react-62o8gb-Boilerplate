import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
          hello
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
