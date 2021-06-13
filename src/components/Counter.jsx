import React from 'react';
import {changeScore} from "../redux/actions";
import {useDispatch} from "react-redux";

export const Counter = (props) => {
  const dispatch = useDispatch();

  return (
    <div className='d-flex justify-content-between align-items-center'>
      <button className='btn btn-info' onClick={() => dispatch(changeScore(props.id, -1))}> - </button>
      <span>{props.score}</span>
      <button className='btn btn-info' onClick={() => dispatch(changeScore(props.id, 1))}> + </button>
    </div>
  );
}
