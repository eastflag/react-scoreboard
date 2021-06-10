import {Statistics} from "./Statistics";

export const Header = (props) => {
  console.log(props);
  // props는 read only 이다. 아래와 같이 하면 안된다.
  // props.totalPlayers = 12;
  return (<div className="header d-flex justify-content-around align-items-center p-2">
    <h1>{props.title}</h1>
    <Statistics players={props.players}></Statistics>
  </div>)
};
