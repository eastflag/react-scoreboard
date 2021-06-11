import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";
import axios from 'axios';

class App extends React.Component {
  state = {
    players: []
  };

  // 화면 렌더링 직후에 자동으로 호출되는 라이프사이클 메서드
  componentDidMount() {
    axios.get('http://api.eastflag.co.kr:8000/api/score/list')
      .then(response => {
        console.log(response);
        const {data} = response;
        this.setState({players: data});
      });
  }

  handleRemovePlayer = (id) => {
    axios.delete(`http://api.eastflag.co.kr:8000/api/score?id=${id}`)
      .then(response => {
        console.log(response);
        const {data} = response;
        if (data.result === 0) {
          this.setState(prevState => {
            return {
              players: prevState.players.filter(item => item.id !== id)
            }
          })
        }
      });
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

  handleAddPlayer = (name) => {
    console.log(name);
    axios.post('http://api.eastflag.co.kr:8000/api/score', {name})
      .then(response => {
        console.log(response);
        const {data} = response;

        this.setState(prevState => {
          const players = [ ... prevState.players ];
          players.unshift(data);
          return { players };
        });
      });
  };

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

        <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
      </div>
    );
  }
}

export default App;
