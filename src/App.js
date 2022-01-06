import "./App.css";

import { Component } from "react";

import RenderCV from "./components/RenderCV";
import GenForm from "./components/GenForm";
import EduForm from "./components/EduForm";
import EmpForm from "./components/EmpForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGenFormActive: true,
      isEduFormActive: true,
      isEmpFormActive: true,
      isRenderCVActive: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <GenForm
          isActive={this.state.isGenFormActive}
          onSubmit={this.handleSubmit}
        />
        <EduForm
          isActive={this.state.isEduFormActive}
          onSubmit={this.handleSubmit}
        />
        <EmpForm
          isActive={this.state.isEmpFormActive}
          onSubmit={this.handleSubmit}
        />
        <RenderCV
          isActive={this.state.isRenderCVActive}
          state={this.state.RenderCV}
        />
      </div>
    );
  }
}

export default App;
