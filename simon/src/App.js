import React, { Component } from 'react';
import './App.css';
import SimonApp from './components/SimonApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "appContainer">
          <SimonApp />
        </div>
      </div>  
    );
  }
}

export default App;
