import {
  SET_PLAYER,
  ADD_PLAYER,
  CHANGE_SCORE,
  REMOVE_PLAYER,
} from "./actionTypes";

export const setPlayer = (players) => {
  return {
    type: SET_PLAYER,
    players
  }
}

export const addPlayer = ({id, name, score}) => {
  return {
    type: ADD_PLAYER,
    player: {id, name, score}
  }
}

export const changeScore = (id, delta) => {
  return {
    type: CHANGE_SCORE,
    id,
    delta
  }
}

export const removePlayer = (id) => {
  return {
    type: REMOVE_PLAYER,
    id
  }
}
