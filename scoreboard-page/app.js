const players = [
  {name: 'LDK', score: 30},
  {name: 'HONG', score: 40},
  {name: 'KIM', score: 50},
  {name: 'PARK', score: 60},
];

const Header = (props) => {
  console.log(props);
  // props는 read only 이다. 아래와 같이 하면 안된다.
  // props.totalPlayers = 12;
  return (<div className="header d-flex justify-content-between align-items-center p-2">
    <span>Total Score: 0</span>
    <h1>{props.title}</h1>
    <span>players: {props.totalPlayers}</span>
  </div>)
};

const Player = (props) => (
  <div className="container">
    <div className='player row align-items-center'>
      <div className="col-9">
        <span>{props.name}</span>
      </div>
      <div className="col-3 counter">
        <Counter score={props.score} />
      </div>
    </div>
  </div>
);

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore() {
    console.log('increment');
    this.setState(
      {score: this.state.score + 1}
    );
  }

  render() {
    return (
      <div className='d-flex justify-content-between align-items-center'>
        <button className='btn btn-info' > - </button>
        <span>{this.state.score}</span>
        <button className='btn btn-info' onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

const App = (props) => (
  <div className="container p-3">
    <Header title="My Scoreboard" totalPlayers={11}/>

    {/*Players List*/}
    { props.initialPlayers.map(item => <Player name={item.name} score={item.score} key={item.name} />) }
  </div>);

ReactDOM.render(<App initialPlayers={players} />, document.getElementById('root'));
