import "./App.css";

import { Component } from "react";

import General from "./components/General";
import Education from "./components/Education";
import Employment from "./components/Employment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <General />
        <Education />
        <Employment />
      </div>
    );
  }
}

export default App;
