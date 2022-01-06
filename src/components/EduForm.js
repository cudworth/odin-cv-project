import { Component } from "react";

import "./Forms.css";

class EduForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      institution: "",
      program: "",
      date: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prev) => {
      const next = { ...prev };
      next[name] = value;
      return next;
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    this.props.onSubmit({ ...this.state });
  }

  render() {
    const { isActive } = this.props;
    const { institution, program, date } = this.state;

    if (isActive) {
      return (
        <form name="EduForm" className="form" onSubmit={this.handleSubmit}>
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
    } else {
      return null;
    }
  }
}

export default EduForm;
