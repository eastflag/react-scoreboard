import {Counter} from "./Counter";
import {useDispatch} from "react-redux";
import {removePlayer} from "../redux/actions";

export const Player = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className='player row align-items-center'>
        <div className="col-1">
          <button className="btn btn-danger"
                  onClick={() => dispatch(removePlayer(props.id))}>x</button>
        </div>
        <div className="col-8">
          {props.children}
          <span>{props.name}</span>
        </div>
        <div className="col-3 counter">
          <Counter score={props.score} id={props.id} changeScore={props.changeScore} />
        </div>
      </div>
    </div>
  )
}
