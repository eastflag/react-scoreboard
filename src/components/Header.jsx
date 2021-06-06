export const Header = (props) => {
  console.log(props);
  // props는 read only 이다. 아래와 같이 하면 안된다.
  // props.totalPlayers = 12;
  return (<div className="header d-flex justify-content-between align-items-center p-2">
    <span>Total Score: 0</span>
    <h1>{props.title}</h1>
    <span>players: {props.totalPlayers}</span>
  </div>)
};
