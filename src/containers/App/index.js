import React, { Component } from 'react';
import LineChart from 'react-linechart';
import logo from './logo.svg';
import './styles.css';
var os = require("os")

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected : 1,
      currentValues: {
        valueOne: undefined,
        valueTwo: undefined,
        valueThree: undefined,
        valueFour : undefined,
        valueFive : undefined,
        valueSix : undefined,
        valueSeven : undefined,
        valueEight : undefined,
        valueNine : undefined
      }
    }

  }

  //Mount cpu average

  componentWillMount() {
    fetch('/api/loadAvg', {
      method: "GET"
    }).then((response) =>{
      return response.json()
    }).then((values)=>{
      console.log(values)
    })

  }

  checkLoadAvg =()=>{
    console.log('clicked')
    fetch('/api/loadAvg', {
      method: "GET",
      credentials: "include"
    }).then((response) =>{
      return response.json()
    }).then((values) =>{
      this.loadNewValues(values)
    })
  }

  loadNewValues=(values)=>{
      this.setState({
      valueOne : values[this.state.selected]
    })
  }


  render() {
    console.log(Object.values.currentValues(this.state))

    const data = [
    {
      color: "blue",
      points: [{x: 1, y: this.state.valueOne}, {x: 2, y: this.state.valueTwo}, {x: 3, y: this.state.valueThree}, {x: 4, y: this.state.valueFour}, {x: 5, y: this.state.valueFive}, {x:6, y: this.state.valueSix}, {x: 7, y: this.state.valueSeven}, {x: 8, y: this.state.valueEight}, {x: 9, y: this.state.valueNine}]
    }]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick = {this.checkLoadAvg}> click
        </button>
        <LineChart
          width={600}
          height={400}
          yMin = {0.5}
          yMax = {2.8}
          data={data}
        />
      </div>
    );
  }
}

export default App;
