import { Component } from "react";

class EducationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institution: "",
      program: "",
      date: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prev) => {
      const next = { ...prev };
      next[name] = value;
      return next;
    });
  }

  renderForm() {
    const { institution, program, date } = this.state;
    return (
      <form name="EducationItem" className="form">
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
      </div>
    );
  }

  render() {
    return this.props.editModeIsActive ? this.renderForm() : this.renderInfo();
  }
}

export default EducationItem;
