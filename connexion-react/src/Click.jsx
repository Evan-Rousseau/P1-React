import React from 'react';

class Click extends React.Component {

  timerID;

  constructor() {
    super();
    this.state = { count: 0, date: new Date() };
  }

  plus() {
    this.setState({ count: this.state.count + 1 });
  }
  minus() {
      if(this.state.count > 0){
        this.setState({ count: this.state.count - 1 });
      }
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
    <div className="App">
        <header className="App-header">
            <h2>{this.state.date.toLocaleDateString()}<br>
            </br>{this.state.date.toLocaleTimeString()}</h2>
            <p>Count: {this.state.count}</p>
            <button onClick={() => this.plus()}>Click Me Up</button>
            <button onClick={() => this.minus()}>Click Me Down</button>
        </header>
      </div>
    );
  }
}

export default Click;