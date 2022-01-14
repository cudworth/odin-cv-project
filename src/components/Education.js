import { useState, useEffect } from "react";
import EducationItem from "./EducationItem";
import "./Education.css";

function Education(props) {
  const [keys, setKeys] = useState([]);

  useEffect(() => createItem(), []);

  function createItem() {
    const key = ["edu", Date.now()].join("_");
    setKeys((prev) => {
      const keys = [...prev];
      keys.push(key);
      return keys;
    });
  }

  function deleteItem(e) {
    const key = e.target.name;
    const index = keys.indexOf(key);
    setKeys((prev) => {
      const keys = [...prev];
      keys.splice(index, 1);
      return keys;
    });
  }

  function renderEducation() {
    const { editModeIsActive } = props;
    return keys.map((key) => {
      return (
        <div key={key}>
          <EducationItem editModeIsActive={editModeIsActive} />
          {editModeIsActive ? (
            <button name={key} onClick={deleteItem}>
              Delete
            </button>
          ) : null}
        </div>
      );
    });
  }

  return (
    <div className="Education">
      <h2>Education</h2>
      {renderEducation()}
      {props.editModeIsActive ? (
        <button onClick={createItem}>Add Education</button>
      ) : null}
    </div>
  );
}

export default Education;
