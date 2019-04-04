import React, { Component } from 'react';
import './App.css';
import SimpleComp from './components/SimpleComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleComp/>
      </div>
    );
  }
}

export default App;
