import { Component } from "react";

import "./Forms.css";

class EmpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      title: "",
      description: "",
      startDate: "",
      endDate: "",
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
    const { company, title, description, startDate, endDate } = this.state;

    if (isActive) {
      return (
        <form name="EmpForm" className="form" onSubmit={this.handleSubmit}>
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
    } else {
      return null;
    }
  }
}

export default EmpForm;
