import { Component } from "react";

import "./Forms.css";

class GenForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: "", phone: "" };

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
    const { name, email, phone } = this.state;

    if (isActive) {
      return (
        <form name="GenForm" className="form" onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <input
                type="text"
                value={name}
                onChange={this.handleChange}
                name="name"
              />
              <label>Name</label>
            </li>

            <li>
              <input
                type="email"
                value={email}
                onChange={this.handleChange}
                name="email"
              />
              <label>Email</label>
            </li>

            <li>
              <input
                type="tel"
                value={phone}
                onChange={this.handleChange}
                name="phone"
              />
              <label>Phone Number</label>
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

export default GenForm;
