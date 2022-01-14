import "./App.css";

import { useState } from "react";

import General from "./components/General";
import Education from "./components/Education";
import Employment from "./components/Employment";

function App(props) {
  const [state, setState] = useState({ editModeIsActive: true });

  function toggleMode(e) {
    if (e) {
      e.preventDefault();
    }
    setState((prev) => {
      const next = { ...prev };
      next.editModeIsActive = !next.editModeIsActive;
      return next;
    });
  }

  function saveButton() {
    if (state.editModeIsActive) {
      return (
        <button id="save-button" onClick={toggleMode}>
          Save Changes
        </button>
      );
    } else {
      return null;
    }
  }

  return (
    <div
      className="App"
      onClick={() => {
        if (!state.editModeIsActive) {
          toggleMode();
        }
      }}
    >
      {saveButton()}

      <div className="Header">
        <h1>Odin CV Generator</h1>
      </div>
      <div>
        <General editModeIsActive={state.editModeIsActive} />
        <Education editModeIsActive={state.editModeIsActive} />
        <Employment editModeIsActive={state.editModeIsActive} />
      </div>
    </div>
  );
}

export default App;
