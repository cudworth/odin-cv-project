import { Component } from "react";

import "./Components.css";

class Employment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      title: "",
      description: "",
      startDate: "",
      endDate: "",
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
    const { company, title, description, startDate, endDate } = this.state;
    return (
      <form name="Employment" className="form" onSubmit={this.toggleMode}>
        <ul>
          <li>
            <input
              type="text"
              value={company}
              onChange={this.handleChange}
              name="company"
            />
            <label>Company</label>
          </li>

          <li>
            <input
              type="text"
              value={title}
              onChange={this.handleChange}
              name="title"
            />
            <label>Title</label>
          </li>

          <li>
            <input
              type="text"
              value={description}
              onChange={this.handleChange}
              name="description"
            />
            <label>Description</label>
          </li>

          <li>
            <input
              type="date"
              value={startDate}
              onChange={this.handleChange}
              name="startDate"
            />
            <label>Start Date</label>
          </li>

          <li>
            <input
              type="date"
              value={endDate}
              onChange={this.handleChange}
              name="endDate"
            />
            <label>End Date</label>
          </li>
        </ul>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  renderInfo() {
    const { company, title, description, startDate, endDate } = this.state;
    return (
      <div>
        {" "}
        <div>
          <h1>{title}</h1>
          <h4>{description}</h4>
          <h4>{company}</h4>
          <h5>{startDate}</h5>
          <h5>{endDate}</h5>
          <input type="button" value="Edit" onClick={this.toggleMode} />
        </div>
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

export default Employment;
