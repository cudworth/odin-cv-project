import { Component } from "react";
import "./General.css";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Austin Cudworth",
      email: "austincudworth@gmail.com",
      phone: "816-832-0060",
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
    const { name, email, phone } = this.state;
    return (
      <form>
        <ul>
          <li>
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
              placeholder="Full Name"
            />
            <label htmlFor="name" className="no-display">
              Name
            </label>
          </li>

          <li>
            <input
              type="email"
              value={email}
              onChange={this.handleChange}
              name="email"
              placeholder="Email Address"
            />
            <label htmlFor="email" className="no-display">
              Email
            </label>
          </li>

          <li>
            <input
              type="tel"
              value={phone}
              onChange={this.handleChange}
              name="phone"
              placeholder="Phone Number"
            />
            <label htmlFor="phone" className="no-display">
              Phone Number
            </label>
          </li>
        </ul>
      </form>
    );
  }

  renderInfo() {
    const { name, email, phone } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h4 style={{ paddingBlockStart: "12px" }}>
          Email: {email} | Phone: {phone}
        </h4>
      </div>
    );
  }

  render() {
    return (
      <div className="General">
        {this.props.editModeIsActive ? this.renderForm() : this.renderInfo()}
      </div>
    );
  }
}

export default General;
