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
        valueOne: 0,
        valueTwo: 0,
        valueThree: 0,
        valueFour : 0,
        valueFive : 0,
        valueSix : 0,
        valueSeven : 0,
        valueEight : 0,
        valueNine : 0
      }
  }

  //Mount cpu average

  componentWillMount() {
    setInterval(() => {
    this.checkLoadAvg();
    },
    1000);
  }

  chooseZero=()=>{
    this.setState({
      selectedIndex: 0
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

  checkLoadAvg =()=>{
    fetch('/api/loadAvg', {
      method: "GET",
      credentials: "include"
    }).then((response) =>{
      return response.json()
    }).then((values) =>{
      this.loadNewValues(values)
    })
  }

  loadNewValues(myValues){
    if(this.state.valueNine !==0 && this.state.valueOne!==0 && this.state.valueTwo!==0 && this.state.valueThree!==0 && this.state.valueFour !== 0 && this.state.valueFive !== 0 && this.state.valueSix !== 0 && this.state.valueSeven !== 0 && this.state.valueEight !== 0){
      this.setState({
        valueOne: this.state.valueTwo,
        valueTwo: this.state.valueThree,
        valueThree: this.state.valueFour,
        valueFour: this.state.valueFive,
        valueFive: this.state.valueSix,
        valueSix: this.state.valueSeven,
        valueSeven: this.state.valueEight,
        valueEight: this.state.valueNine,
        valueNine: myValues[this.state.selectedIndex]
      })
    }
    if(this.state.valueNine ===0 && this.state.valueOne!==0 && this.state.valueTwo!==0 && this.state.valueThree!==0 && this.state.valueFour !== 0 && this.state.valueFive !== 0 && this.state.valueSix !== 0 && this.state.valueSeven !== 0 && this.state.valueEight !== 0){
      this.setState({
        valueNine: myValues[this.state.selectedIndex]
      })
    }
    if(this.state.valueEight === 0 && this.state.valueOne!==0 && this.state.valueTwo!==0 && this.state.valueThree!==0 && this.state.valueFour !== 0 && this.state.valueFive !== 0 && this.state.valueSix !== 0 && this.state.valueSeven !== 0){
      this.setState({
        valueEight: myValues[this.state.selectedIndex]
      })
    }
    if(this.state.valueSeven === 0 && this.state.valueOne!==0 && this.state.valueTwo!==0 && this.state.valueThree!==0 && this.state.valueFour !== 0 && this.state.valueFive !== 0 && this.state.valueSix !== 0){
      this.setState({
        valueSeven: myValues[this.state.selectedIndex]
      })
    }
    if(this.state.valueSix === 0 && this.state.valueOne!==0 && this.state.valueTwo!==0 && this.state.valueThree!==0 && this.state.valueFour !== 0 && this.state.valueFive !== 0){
      this.setState({
        valueSix: myValues[this.state.selectedIndex]
      })
    }
    if(this.state.valueFive ===0 && this.state.valueOne!==0 && this.state.valueTwo!==0 && this.state.valueThree!==0 && this.state.valueFour !== 0){
      this.setState({
        valueFive: myValues[this.state.selectedIndex]
      })
    }
    if(this.state.valueFour ===0 && this.state.valueOne!==0 && this.state.valueTwo!==0 && this.state.valueThree!==0){
      this.setState({
        valueFour: myValues[this.state.selectedIndex]
      })
    }
    if(this.state.valueThree === 0 && this.state.valueTwo !==0 && this.state.valueOne !== 0){
      this.setState({
        valueThree: myValues[this.state.selectedIndex]
      })
    }
    if(this.state.valueTwo === 0 && this.state.valueOne !== 0){
      this.setState({
        valueTwo: myValues[this.state.selectedIndex]
      })
    }
    if(this.state.valueOne === 0){
      this.setState({
        valueOne: myValues[this.state.selectedIndex]
      })
    }
  }



  render() {
    const data = [
    {
      color: "blue",
      points: [{x: 1, y: this.state.valueOne}, {x: 2, y: this.state.valueTwo}, {x: 3, y: this.state.valueThree}, {x: 4, y: this.state.valueFour}, {x:5, y:this.state.valueFive}, {x:6, y:this.state.valueSix}, {x:7, y: this.state.valueSeven}, {x:8, y:this.state.valueEight}, {x:9, y:this.state.valueNine}]
    }
    ]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          selected interval: {this.state.selectedInterval}, {this.state.valueNine}
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
          value = {this.state.valueNine}
        />
        <LineChart
          width={600}
          height={400}
          yMin = {0.5}
          yMax = {3}
          data={data}
        />
      </div>
    );
  }
}

export default App;
