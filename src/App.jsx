import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";

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
    this.setState(prevState => {
      // 새로운 players 배열 생성
      const players = [ ...prevState.players ];
      players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      })
      return { players }
    })
  }

  render() {
    return (
      <div className="container p-3">
        <Header title="My scoreboard" players={this.state.players} />

        {/*Players List*/}
        { this.state.players.map(item =>
          <Player key={item.id}
                  name={item.name} score={item.score} id={item.id}
                  removePlayer={this.handleRemovePlayer}
                  changeScore={this.handleChangeScore} />) }

        <AddPlayerForm></AddPlayerForm>
      </div>
    );
  }
}

export default App;
