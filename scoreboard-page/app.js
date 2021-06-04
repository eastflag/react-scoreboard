const Header = (props) => (<div className="header d-flex justify-content-between align-items-center p-2">
  <span>Total Score: 0</span>
  <h1>My Scoreboard</h1>
  <span>players: 0</span>
</div>);

const Player = (props) => (
  <div className="container">
    <div className='player row align-items-center'>
      <div className="col-9">
        <span>LDK</span>
      </div>
      <div className="col-3 counter">
        <Counter />
      </div>
    </div>
  </div>
);

const Counter = (props) => (<div className='d-flex justify-content-between align-items-center'>
  <button className='btn btn-info' > - </button>
  <span>0</span>
  <button className='btn btn-info'> + </button>
</div>)

const App = (props) => (
  <div className="container p-3">
    <Header/>
    <Player/>
  </div>);

ReactDOM.render(<App />, document.getElementById('root'));
