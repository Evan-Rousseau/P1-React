import React from 'react';

class Time extends React.Component {

  timerID;

  constructor() {
    super();
    this.state = { date: new Date() };
  }

  componentDidMount() { 
    this.timerID = setInterval( () => this.tick(), 1000 ); 
  } 
  componentWillUnmount() { 
    clearInterval(this.timerID); 
  }

  tick(){ this.setState({ date: new Date() }); }

  render() {
    return (
        <h2>{this.state.date.toLocaleDateString()}<br>
        </br>{this.state.date.toLocaleTimeString()}</h2>
    );
  }
}

export default Time;