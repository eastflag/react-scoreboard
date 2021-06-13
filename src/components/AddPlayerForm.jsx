import React, {useRef, useState} from 'react';
import axios from "axios";
import {addPlayer} from "../redux/actions";
import {useDispatch} from "react-redux";

export const AddPlayerForm = (props) => {
  const formRef = useRef();
  const textRef = useRef();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current; // form node
    const player = textRef.current; // input node

    console.log(player.validity.valid);
    console.log(form.checkValidity());

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const response = await axios.post('http://api.eastflag.co.kr:8000/api/score', {name: value})

    console.log(response);
    const {data} = response;
    dispatch(addPlayer(data))
    setValue('')
    form.classList.remove('was-validated');
  }

  return (
    <div className="container">
      <form ref={formRef} noValidate
            className="row player align-items-center needs-validation" onSubmit={handleSubmit}>
        <div className="col-9">
          {/*<label htmlFor="playerName" className="form-label">Player Name</label>*/}
          <input ref={textRef}
                 type="text" className="form-control" id="playerName" placeholder="input player name"
                 required
                 value={value} onChange={handleValueChange}></input>
          <div className="invalid-feedback">
            Please input name.
          </div>
        </div>
        <div className="col-3 d-grid">
          <button type="submit" className="btn btn-primary">Add Player</button>
        </div>
      </form>
    </div>
  )
}
