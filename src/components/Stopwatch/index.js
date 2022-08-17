import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {
    isTimerRunning: false,
    timerSeconds: 0,
  }

  componentDidMount = () => {
    clearInterval(this.timeInterval)
  }

  onRestButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timerSeconds: 0})
  }

  onStopButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timerSeconds: prevState.timerSeconds + 1,
    }))
  }

  onStartButton = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timerSeconds} = this.state
    const minutes = Math.floor(timerSeconds % 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderMinutes = () => {
    const {timerSeconds} = this.state
    const minutes = Math.floor(timerSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Stopwatch</h1>

          <div className="box-container">
            <div className="app-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="img"
              />
              <p className="paragraph">Timer</p>
            </div>
            <h1 className="heading">{time}</h1>
            <div className="button-container">
              <button
                className="btn"
                type="button"
                onClick={this.onStartButton}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="btn1"
                type="button"
                onClick={this.onStopButton}
              >
                Stop
              </button>
              <button
                className="btn2"
                type="button"
                onClick={this.onRestButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
