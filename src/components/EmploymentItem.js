import { Component } from "react";

class EmploymentItem extends Component {
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
    const { company, title, description, startDate, endDate } = this.state;
    return (
      <form name="EmploymentItem" className="form">
        <ul>
          <li>
            <input
              type="text"
              value={company}
              onChange={this.handleChange}
              name="company"
              placeholder="Company"
            />
            <label htmlFor="company" className="no-display">
              Company
            </label>
          </li>

          <li>
            <input
              type="text"
              value={title}
              onChange={this.handleChange}
              name="title"
              placeholder="Title"
            />
            <label htmlFor="title" className="no-display">
              Title
            </label>
          </li>

          <li>
            <input
              type="text"
              value={description}
              onChange={this.handleChange}
              name="description"
              placeholder="Description"
            />
            <label htmlFor="description" className="no-display">
              Description
            </label>
          </li>

          <li>
            <input
              type="text"
              value={startDate}
              onChange={this.handleChange}
              name="startDate"
              placeholder="Start Date"
            />
            <label htmlFor="startDate" className="no-display">
              Start Date
            </label>
          </li>

          <li>
            <input
              type="text"
              value={endDate}
              onChange={this.handleChange}
              name="endDate"
              placeholder="End Date"
            />
            <label htmlFor="endDate" className="no-display">
              End Date
            </label>
          </li>
        </ul>
      </form>
    );
  }

  renderInfo() {
    const { company, title, description, startDate, endDate } = this.state;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{description}</h5>
        <h5>{company}</h5>
        <h5>{startDate}</h5>
        <h5>{endDate}</h5>
      </div>
    );
  }

  render() {
    return this.props.editModeIsActive ? this.renderForm() : this.renderInfo();
  }
}

export default EmploymentItem;
