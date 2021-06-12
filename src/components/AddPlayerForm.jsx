import React, {useRef, useState} from 'react';

export const AddPlayerForm = (props) => {
  const formRef = useRef();
  const textRef = useRef();
  const [value, setValue] = useState('');

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current; // form node
    const player = textRef.current; // input node

    console.log(player.validity.valid);
    console.log(form.checkValidity());

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    props.addPlayer(value);
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
