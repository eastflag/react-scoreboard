import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Header = (props) => {
  console.log(props);
  // props는 read only 이다. 아래와 같이 하면 안된다.
  // props.totalPlayers = 12;
  return (<div className="header d-flex justify-content-between align-items-center p-2">
    <span>Total Score: 0</span>
    <h1>{props.title}</h1>
    <span>players: {props.totalPlayers}</span>
  </div>)
};

const Player = (props) => (
  <div className="container">
    <div className='player row align-items-center'>
      <div className="col-1">
        <button className="btn btn-danger"
                onClick={() => props.removePlayer(props.id)}>x</button>
      </div>
      <div className="col-8">
        <span>{props.name}</span>
      </div>
      <div className="col-3 counter">
        <Counter score={props.score} />
      </div>
    </div>
  </div>
);

class Counter extends React.Component {
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

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="container p-3">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />

        {/*Players List*/}
        { this.state.players.map(item =>
          <Player name={item.name} key={item.id}
                  removePlayer={this.handleRemovePlayer} id={item.id} />) }
      </div>
    );
  }
}

export default App;
