import React, { Component } from 'react';
import LineChart from 'react-linechart';
import ReactSpeedometer from "react-d3-speedometer"
import logo from './logo.svg';
import './styles.css';
var os = require("os")

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        selectedIndex: 0,
        selectedInterval:"One Minute",
        valueArray :[0,0,0,0,0,0,0,0,0],
        displaySpeed: 0
      }
  }

  componentWillMount() {
    setInterval(() => {
    this.checkLoadAvg();
    },
    1000);
  }

  chooseZero=()=>{
    this.setState({
      selectedIndex: 0,
      selectedInterval: "One Minute"
    })
  }
  chooseOne=()=>{
    this.setState({
      selectedIndex: 1,
      selectedInterval: "Five Minutes"
    })
  }
  chooseTwo=()=>{
    this.setState({
      selectedIndex: 2,
      selectedInterval: "Fifteen Minutes"
    })
  }

  checkLoadAvg=()=>{
    fetch('/api/loadAvg', {
      method: "GET",
      credentials: "include"
    }).then((response) =>{
      return response.json()
    }).then((values) =>{
      this.loadNewValues(values)
    })
  }

  loadNewValues(returnedValues){
    let alteredValueArray = []
    alteredValueArray = this.state.valueArray
    alteredValueArray.shift()
    alteredValueArray.push(returnedValues[this.state.selectedIndex])
    this.setState({
    valueArray: alteredValueArray,
    displaySpeed: returnedValues[this.state.selectedIndex]
    })
  }

  render() {
    const data = [
    {
      color: "blue",
      points: [{x: 1, y: this.state.valueArray[0]}, {x: 2, y: this.state.valueArray[1]}, {x: 3, y: this.state.valueArray[2]}, {x: 4, y: this.state.valueArray[3]}, {x:5, y:this.state.valueArray[4]}, {x:6, y:this.state.valueArray[5]}, {x:7, y: this.state.valueArray[6]}, {x:8, y:this.state.valueArray[7]}, {x:9, y:this.state.valueArray[8]}]
    }
    ]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CPU Load</h1>
        </header>
        <p className="App-intro">
          selected interval: {this.state.selectedInterval}, {this.state.displaySpeed}
        </p>
        <button onClick = {this.chooseZero}> One Minute Interval
        </button>
        <button onClick = {this.chooseOne}> Five Minute Interval
        </button>
        <button onClick = {this.chooseTwo}> Fifteen Minute Interval
        </button>
        <ReactSpeedometer
          minValue = {0}
          maxValue = {3}
          value = {this.state.displaySpeed}
        />
        <LineChart
           width={600}
           height={400}
           yMin = {0}
           yMax = {3}
           data={data}
        />
      </div>
    );
  }
}

export default App;
