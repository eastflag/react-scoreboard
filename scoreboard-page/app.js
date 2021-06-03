const players = [
  {name: 'LDK', score: 30, id: 1},
  {name: 'HONG', score: 40, id: 2},
  {name: 'KIM', score: 50, id: 3},
  {name: 'PARK', score: 60, id: 4},
];

const Header = (props) => {
  console.log(props);
  // destruct assignment
  const {title, totalPlayers} = props;
  return (
    <div className="header d-flex justify-content-between align-items-md-center p-2">
      <span>Total Score:</span>
      <h1 className="h1">{title}</h1>
      <span>Players: {totalPlayers}</span>
    </div>
  );
}

const Player = (props) => (
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
        <Counter/>
      </div>
    </div>
  </div>
);

class Counter extends React.Component {
  state = {
    score: 0,
    a: 3
  }

  constructor(props) {
    super(props);
    // 1) this.incrementScore = this.incrementScore.bind(this);
  }

  changeScore = (delta) => {
    // 2) arrow 펑션안의 this는 lexical this
    console.log(this);
    // 1. state를 변경하는 방법
    // this.state.score += 1;
    // this.setState({score: this.state.score + 1});
    // 2. merge 된다. : 기존 속성으 그대로 유지
    // 3. 비동기로 처리
    this.setState(prevState => ({
      score: prevState.score + delta
    }));
  }

  render() {
    return (
      <div className='d-flex justify-content-between align-items-center'>
        <button className='btn btn-info'
                onClick={() => this.changeScore(-1)}> -
        </button>
        <span className='counter-score'>{this.state.score}</span>
        <button className='btn btn-info'
                onClick={() => this.changeScore(1)}> +
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  }
  // 1) player 삭제 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log(id);

    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
      <div className="container p-3">
        <Header title='My Scoreboard' totalPlayers={11}/>

        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id} id={player.id}
                    removePlayer={this.handleRemovePlayer}/>
          ))
        }
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'))
