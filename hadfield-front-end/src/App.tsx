import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

interface IProps {
}
interface IState {
  test?: string;
}

export class MyThing extends React.Component<IProps, IState>{
  constructor(props: IProps){
    super(props);

    this.state = {
      test : "no api call performed"
    };
  }

  componentDidMount(){
    //do an api code to the node.js backend, just to test this out
    axios({ method: "GET", url: "http://localhost:4000" })
      .then((response: { data: any; }) => {
        console.log("Callback", response.data);
        this.setState({test : response.data.thing});
      });
  }

  render() {
    return(
      <div>
        {this.state.test}
      </div>
    );
  }


}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyThing></MyThing>
      </header>
    </div>
  );
}




export default App;
