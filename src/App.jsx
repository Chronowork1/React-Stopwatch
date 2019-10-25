import React, { Component } from 'react';
import './App.css';

//Special function App 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stopwatch</h1>
        <Stopwatch status={false} runningTime={0}/>
      </div>
    )
  }
}

class Stopwatch extends Component{
  state = {
    status: false,
    runningTime: 0
  }

  handleClick = () => {
    this.setState(state => {
      if(state.status) {
        clearInterval(this.timer);
      }else{
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({
            runningTime: Date.now() - startTime
          })
        })
      }
      return {
        status: !state.status
      };
    })
  }

  handleReset = () => {
    clearInterval(this.timer)
    this.setState({
      runningTime: 0,
      running: false
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {status, runningTime} = this.state;

    return (
      <div>
        <p>{runningTime}</p>
        <button>{status ? 'Stop': 'Start'}</button>
        <button>Reset</button>
      </div>
    )
  }
}

export default App;