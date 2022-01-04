import "./App.css";

import { Component } from "react";

import RenderCV from "./components/RenderCV";
import CVForm from "./components/CVForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <CVForm />
        <RenderCV />
      </div>
    );
  }
}

export default App;
