import { useState, useEffect } from "react";
import EmploymentItem from "./EmploymentItem";
import "./Employment.css";

function Employment(props) {
  const [keys, setKeys] = useState([]);

  useEffect(() => createItem(), []);

  function createItem() {
    const key = ["emp", Date.now()].join("_");
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

  function renderEmployment() {
    const { editModeIsActive } = props;
    return keys.map((key) => {
      return (
        <div key={key}>
          <EmploymentItem editModeIsActive={editModeIsActive} />
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
    <div className="Employment">
      <h2>Employment</h2>
      {renderEmployment()}
      {props.editModeIsActive ? (
        <button onClick={createItem}>Add Employment</button>
      ) : null}
    </div>
  );
}

export default Employment;
