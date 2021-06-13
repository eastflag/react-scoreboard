import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, SET_PLAYER} from "../actionTypes";

const playerInitialState = {
  players: [],
};

export const playerReducer = (state = playerInitialState, action) => {
  let copyPlayers;

  switch(action.type) {
    case SET_PLAYER:
      return {
        ...state,
        players: action.players
      }
    case ADD_PLAYER:
      copyPlayers = [ ...state.players ];
      copyPlayers.unshift(action.player);
      return {
        ...state,
        players: copyPlayers
      }
    case REMOVE_PLAYER:
      const players = state.players.filter(item => item.id !== action.id)
      return {
        ...state,
        players
      }
    case CHANGE_SCORE:
      copyPlayers = [ ...state.players ];
      copyPlayers.forEach(player => {
        if (player.id === action.id) {
          player.score += action.delta;
        }
      })
      return {
        ...state,
        players: copyPlayers
      }
    default:
      return state;
  }
}
