import React from 'react';
import './Counter.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  addCounter = () => {
    return this.setState(state => ({
      counter: state.counter + 1, 
    }));
  }

  render() {
    return (
      <div className={this.state.counter >= 5 ? 'max-5' : null} >
        <h2>{this.state.counter}</h2>
        <button onClick={this.addCounter}>Add</button>
      </div>
    );
  };
}

export default Counter;