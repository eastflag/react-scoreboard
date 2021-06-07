import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  handleChangeScore = (id, delta) => {
    console.log('id: ' + id, 'delta: ' + delta);
  }

  render() {
    return (
      <div className="container p-3">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />

        {/*Players List*/}
        { this.state.players.map(item =>
          <Player key={item.id}
                  name={item.name} score={item.score} id={item.id}
                  removePlayer={this.handleRemovePlayer}
                  changeScore={this.handleChangeScore} />) }
      </div>
    );
  }
}

export default App;
