import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from "./components/Header";
import {AddPlayerForm} from "./components/AddPlayerForm";
import axios from 'axios';
import {CustomPlayer} from "./components/CustomPlayer";
import _ from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import {addPlayer, changeScore, removePlayer, setPlayer} from "./redux/actions";

const App = () => {
  // 전체 store에서 playerReducer 에서 사용중인 players 데이터를 가져온다.
  const players = useSelector(state => state.playerReducer.players);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://api.eastflag.co.kr:8000/api/score/list')
      .then(response => {
        console.log(response);
        const {data} = response;
        dispatch(setPlayer(data));
      });
  }, [])

  const handleChangeScore = (id, delta) => {
    console.log('id: ' + id, 'delta: ' + delta);

  }

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
                      />) }

      <AddPlayerForm></AddPlayerForm>
    </div>
  )
}

export default App;
