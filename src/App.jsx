import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";

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
