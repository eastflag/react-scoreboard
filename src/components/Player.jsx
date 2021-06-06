import {Counter} from "./Counter";

export const Player = (props) => (
  <div className="container">
    <div className='player row align-items-center'>
      <div className="col-1">
        <button className="btn btn-danger"
                onClick={() => props.removePlayer(props.id)}>x</button>
      </div>
      <div className="col-8">
        <span>{props.name}</span>
      </div>
      <div className="col-3 counter">
        <Counter score={props.score} />
      </div>
    </div>
  </div>
);
