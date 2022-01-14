import { useState } from "react";

function EmploymentItem(props) {
  const [state, setState] = useState({
    company: "",
    title: "",
    description: "",
    startDate: "",
    endDate: "",
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
    const { company, title, description, startDate, endDate } = state;
    return (
      <form name="EmploymentItem" className="form">
        <ul>
          <li>
            <input
              type="text"
              value={company}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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

  function renderInfo() {
    const { company, title, description, startDate, endDate } = state;
    return (
      <div className="employment-item">
        <h4>
          {title}, {company}, {startDate} - {endDate}
        </h4>
        <h5>{description}</h5>
      </div>
    );
  }

  return props.editModeIsActive ? renderForm() : renderInfo();
}

export default EmploymentItem;
