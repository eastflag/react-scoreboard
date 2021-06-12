import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from "./components/Header";
import {AddPlayerForm} from "./components/AddPlayerForm";
import axios from 'axios';
import {CustomPlayer} from "./components/CustomPlayer";
import _ from 'lodash';

const App = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://api.eastflag.co.kr:8000/api/score/list')
      .then(response => {
        console.log(response);
        const {data} = response;
        setPlayers(data);
      });
  }, [])

  const handleRemovePlayer = (id) => {
    axios.delete(`http://api.eastflag.co.kr:8000/api/score?id=${id}`)
      .then(response => {
        console.log(response);
        const {data} = response;
        if (data.result === 0) {
          setPlayers(players.filter(item => item.id !== id));
        }
      });
  }

  const handleChangeScore = (id, delta) => {
    console.log('id: ' + id, 'delta: ' + delta);

    const copyPlayers = [ ...players ];
    copyPlayers.forEach(player => {
      if (player.id === id) {
        player.score += delta;
      }
    })
    setPlayers(copyPlayers);
  }

  const handleAddPlayer = (name) => {
    console.log(name);
    axios.post('http://api.eastflag.co.kr:8000/api/score', {name})
      .then(response => {
        console.log(response);
        const {data} = response;

        const copyPlayers = [ ... players ];
        copyPlayers.unshift(data);
        setPlayers(copyPlayers);
      });
  };

  const getHighScore = () => {
    const maxObject = _.maxBy(players, 'score');
    const highScore = maxObject.score;
    // 0은 디폴트이므로  0보다 클 경우만 highScore로 지정한다.
    return highScore > 0 ? highScore : null;
  }

  return (
    <div className="container p-3">
      <Header title="My scoreboard" players={players} />

      {/*Players List*/}
      { players.map(item =>
        <CustomPlayer key={item.id}
                      name={item.name} score={item.score} id={item.id}
                      isHighScore={item.score === getHighScore()}
                      removePlayer={handleRemovePlayer}
                      changeScore={handleChangeScore} />) }

      <AddPlayerForm addPlayer={handleAddPlayer}></AddPlayerForm>
    </div>
  )
}

export default App;
