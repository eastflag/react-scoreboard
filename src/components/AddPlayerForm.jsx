import React, {Component} from 'react';

export class AddPlayerForm extends Component {
  state = {
    value: ''
  };

  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.textRef = React.createRef();
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const form = this.formRef.current; // form node
    const player = this.textRef.current; // input node

    console.log(player.validity.valid);
    console.log(form.checkValidity());

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    this.props.addPlayer(this.state.value);
    this.setState({
      value: ''
    });
    form.classList.remove('was-validated');
  }

  render() {
    return (
      <div className="container">
        <form ref={this.formRef} noValidate
              className="row player align-items-center needs-validation" onSubmit={this.handleSubmit}>
          <div className="col-9">
            {/*<label htmlFor="playerName" className="form-label">Player Name</label>*/}
            <input ref={this.textRef}
                   type="text" className="form-control" id="playerName" placeholder="input player name"
                   required
                   value={this.state.value} onChange={this.handleValueChange}></input>
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
}
