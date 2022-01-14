import { useState } from "react";

function EducationItem(props) {
  const [state, setState] = useState({
    institution: "",
    program: "",
    date: "",
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
    const { institution, program, date } = state;
    return (
      <form name="EducationItem" className="form">
        <ul>
          <li>
            <input
              type="text"
              value={institution}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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

  function renderInfo() {
    const { institution, program, date } = state;
    return (
      <div className="education-item">
        <h4>
          {program}, {institution}, {date}
        </h4>
      </div>
    );
  }

  return props.editModeIsActive ? renderForm() : renderInfo();
}

export default EducationItem;
