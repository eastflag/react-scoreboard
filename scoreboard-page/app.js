const strTitle = 'This is a title';

const header = (<div className="header d-flex justify-content-between align-items-center p-2">
  <span>Total Score: 0</span>
  <h1 title={strTitle}>My Scoreboard</h1>
  <span>players: 0</span>
</div>);

ReactDOM.render(header, document.getElementById('root'));
