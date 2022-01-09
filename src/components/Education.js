import { Component } from "react";

import "./Components.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      institution: "",
      program: "",
      date: "",
      formIsActive: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prev) => {
      const next = { ...prev };
      next[name] = value;
      return next;
    });
  }

  toggleMode(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState((prev) => {
      const next = { ...prev };
      next.formIsActive = !next.formIsActive;
      return next;
    });
  }

  renderForm() {
    const { institution, program, date } = this.state;
    return (
      <form name="Education" className="form" onSubmit={this.toggleMode}>
        <ul>
          <li>
            <input
              type="text"
              value={institution}
              onChange={this.handleChange}
              name="institution"
            />
            <label>Institution</label>
          </li>

          <li>
            <input
              type="text"
              value={program}
              onChange={this.handleChange}
              name="program"
            />
            <label>Program</label>
          </li>

          <li>
            <input
              type="date"
              value={date}
              onChange={this.handleChange}
              name="date"
            />
            <label>Date</label>
          </li>
        </ul>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  renderInfo() {
    const { institution, program, date } = this.state;
    return (
      <div>
        <h2>{institution}</h2>
        <h3>{program}</h3>
        <h3>{date}</h3>
        <input type="button" value="Edit" onClick={this.toggleMode} />
      </div>
    );
  }

  render() {
    if (this.state.formIsActive) {
      return this.renderForm();
    } else {
      return this.renderInfo();
    }
  }
}

export default Education;
