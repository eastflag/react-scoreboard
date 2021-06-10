import React, {Component} from 'react';

export class AddPlayerForm extends Component {
  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  };

  render() {
    return (
      <div className="container">
        <form className="row player align-items-center">
          <div className="col-9">
            {/*<label htmlFor="playerName" className="form-label">Player Name</label>*/}
            <input type="text" className="form-control" id="playerName" placeholder="input player name"
                   value={this.state.value} onChange={this.handleValueChange}></input>
          </div>
          <div className="col-3 d-grid">
            <button type="submit" className="btn btn-primary">Add Player</button>
          </div>
        </form>
      </div>
    )
  }
}
