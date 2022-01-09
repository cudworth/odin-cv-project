import { Component } from "react";

import "./Components.css";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: "", phone: "", formIsActive: true };

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
    const { name, email, phone } = this.state;
    return (
      <form name="General" className="form" onSubmit={this.toggleMode}>
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
        <input type="submit" value="Save" />
      </form>
    );
  }

  renderInfo() {
    const { name, email, phone } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        <input type="button" value="Edit" onClick={this.toggleMode} />
      </div>
    );
  }

  render() {
    const { formIsActive } = this.state;
    if (formIsActive) {
      return this.renderForm();
    } else {
      return this.renderInfo();
    }
  }
}

export default General;
