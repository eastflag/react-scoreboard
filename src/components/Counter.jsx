import React from 'react';

export class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    console.log(this);
    this.setState(prevState => {
      return {score: prevState.score + 1}
    });
  }

  decrementScore = () => {
    this.setState(prevState => {
      return {score: prevState.score - 1}
    });
  }

  render() {
    return (
      <div className='d-flex justify-content-between align-items-center'>
        <button className='btn btn-info' onClick={this.decrementScore}> - </button>
        <span>{this.state.score}</span>
        <button className='btn btn-info' onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}
