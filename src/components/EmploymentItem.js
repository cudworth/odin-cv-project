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
      </form>
    );
  }

  renderInfo() {
    const { company, title, description, startDate, endDate } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <h4>{company}</h4>
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
