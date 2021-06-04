const title = <h1 title="This is a title">My Scoreboard</h1>;
console.log(title);

const totalScore = <span>Total Score: 0</span>;

const players = <span>players: 0</span>;

const header = (<div className="header d-flex justify-content-between align-items-center p-2">
  {[totalScore, title, players]}
</div>);

ReactDOM.render(header, document.getElementById('root'));
