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
              placeholder="Institution"
            />
            <label htmlFor="institution" className="no-display">
              Institution
            </label>
          </li>

          <li>
            <input
              type="text"
              value={program}
              onChange={this.handleChange}
              name="program"
              placeholder="Program of Study"
            />
            <label htmlFor="program" className="no-display">
              Program
            </label>
          </li>

          <li>
            <input
              type="text"
              value={date}
              onChange={this.handleChange}
              name="date"
              placeholder="Graduation Date"
            />
            <label htmlFor="date" className="no-display">
              Date
            </label>
          </li>
        </ul>
      </form>
    );
  }

  renderInfo() {
    const { institution, program, date } = this.state;
    return (
      <div>
        <h4>{institution}</h4>
        <h5>{program}</h5>
        <h5>{date}</h5>
      </div>
    );
  }

  render() {
    return this.props.editModeIsActive ? this.renderForm() : this.renderInfo();
  }
}

export default EducationItem;
