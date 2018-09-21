import React, { Component } from 'react';
import './App.css';
import Timer from './componets/stopWatch'
class App extends Component {
  render() {
    return (
      <div className="App">
       <p>stop watch</p>
       <Timer />
      </div>
    );
  }
}

export default App;
