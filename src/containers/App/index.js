import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
var os = require("os")

class App extends Component {

  constructor(props) {
    super(props);

  }

  //Mount cpu average

  componentWillMount() {
    //os.loadavg()
    console.log(os.loadavg())

  }

  checkLoadAvg(){
    console.log(os.loadavg())
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick = {this.checkLoadAvg}> click </button>
      </div>
    );
  }
}

export default App;
