const title = React.createElement(
  'h1',
  { title: 'This is a title'},
  'My Scoreboard'
);
console.log(title);

const totalScore = React.createElement(
  'span',
  null,
  'Total Score: 0'
);

const players = React.createElement(
  'span',
  null,
  'players: 0'
);


const header = React.createElement(
  'div',
  { class: 'header d-flex justify-content-between align-items-md-center p-2'},
  totalScore, title, players
);

ReactDOM.render(header, document.getElementById('root'));
