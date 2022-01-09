import { Component } from "react";

import "./RenderCV.css";

class RenderCV extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderGen() {
    if (this.props.data) {
      const { name, email, phone } = this.props.data;
      return (
        <div>
          <h1>{name}</h1>
          <h4>{email}</h4>
          <h4>{phone}</h4>
        </div>
      );
    } else {
      return null;
    }
  }

  renderEdu() {
    if (this.props.data) {
      const items = this.props.data;
      return items.map((item) => {
        const { institution, program, date } = item;
        return (
          <div>
            <h1>{institution}</h1>
            <h4>{program}</h4>
            <h4>{date}</h4>
          </div>
        );
      });
    } else {
      return null;
    }
  }

  renderEmp() {
    if (this.props.data) {
      const items = this.props.data;
      return items.map((item) => {
        const { company, title, description, startDate, endDate } = item;
        return (
          <div>
            <h1>{company}</h1>
            <h4>{title}</h4>
            <h4>{description}</h4>
            <h4>{startDate}</h4>
            <h4>{endDate}</h4>
          </div>
        );
      });
    } else {
      return null;
    }
  }

  render() {
    const { isActive } = this.props;
    if (isActive) {
      return (
        <div className="render-cv">
          {this.renderGen()}
          {this.renderEdu()}
          {this.renderEmp()}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default RenderCV;
