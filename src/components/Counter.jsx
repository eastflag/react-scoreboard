import React from 'react';

export const Counter = (props) => {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <button className='btn btn-info' onClick={() => props.changeScore(props.id, -1)}> - </button>
      <span>{props.score}</span>
      <button className='btn btn-info' onClick={() => props.changeScore(props.id, 1)}> + </button>
    </div>
  );
}
