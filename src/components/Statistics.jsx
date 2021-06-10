import React from 'react';
import _ from 'lodash';

export const Statistics = (props) => {
  const totalPlayers = props.players.length;
  const totalScore = _.sumBy(props.players, 'score');

  return (
    <div className="d-flex flex-column">
      <span>Players: {totalPlayers}</span>
      <span>Total scores: {totalScore}</span>
    </div>
  )
}
