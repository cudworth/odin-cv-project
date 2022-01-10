import "./App.css";

import { Component } from "react";

import General from "./components/General";
import Education from "./components/Education";
import Employment from "./components/Employment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { editModeIsActive: true };

    this.toggleMode = this.toggleMode.bind(this);
    this.saveButton = this.saveButton.bind(this);
  }

  toggleMode(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState((prev) => {
      const next = { ...prev };
      next.editModeIsActive = !next.editModeIsActive;
      return next;
    });
  }

  saveButton() {
    if (this.state.editModeIsActive) {
      return <button onClick={this.toggleMode}>Save Changes</button>;
    } else {
      return null;
    }
  }

  render() {
    const { editModeIsActive } = this.state;
    return (
      <div
        className="App"
        onClick={() => {
          if (!editModeIsActive) {
            this.toggleMode();
          }
        }}
      >
        {this.saveButton()}
        <General editModeIsActive={editModeIsActive} />
        <Education editModeIsActive={editModeIsActive} />
        <Employment editModeIsActive={editModeIsActive} />
      </div>
    );
  }
}

export default App;
