import React from 'react';

export const Counter = (props) => {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <button className='btn btn-info'> - </button>
      <span>{this.props.score}</span>
      <button className='btn btn-info'> + </button>
    </div>
  );
}
