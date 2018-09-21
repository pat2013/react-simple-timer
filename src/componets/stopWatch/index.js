import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      label: "start"
    };
    this.counter = 0;
  }
  
  start = () => {
    this.setState({ label: this.state.label === "start" ? "stop" : "start" });
    if (this.state.label === "start") {
        this.counter = setInterval(() => {
            this.setState({
              time: this.state.time + 1
            });
          }, 1000);
    }else {
        clearInterval(this.counter);
    } 
  };

  reset = () => {
    this.setState({
        time: 0
      });
  };
  render() {
    return (
      <div>
        <p>{this.state.time}</p>
        <button onClick={this.start}>{this.state.label}</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
