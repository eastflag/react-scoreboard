const Header = (props) => (<div className="header d-flex justify-content-between align-items-center p-2">
  <span>Total Score: 0</span>
  <h1>My Scoreboard</h1>
  <span>players: 0</span>
</div>);

ReactDOM.render(<Header />, document.getElementById('root'));
