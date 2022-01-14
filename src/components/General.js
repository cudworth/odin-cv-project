import { useState } from "react";
import "./General.css";

function General(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setState((prev) => {
      const next = { ...prev };
      next[name] = value;
      return next;
    });
  }

  function renderForm() {
    const { name, email, phone } = state;
    return (
      <form>
        <ul>
          <li>
            <input
              type="text"
              value={name}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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

  function renderInfo() {
    const { name, email, phone } = state;
    return (
      <div>
        <h1>{name}</h1>
        <h4 style={{ paddingBlockStart: "12px" }}>
          Email: {email} | Phone: {phone}
        </h4>
      </div>
    );
  }

  return (
    <div className="General">
      {props.editModeIsActive ? renderForm() : renderInfo()}
    </div>
  );
}

export default General;
