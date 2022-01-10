import { Component } from "react";
import EducationItem from "./EducationItem";
import "./Education.css";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.keys = [];

    this.createItem = this.createItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.renderEducation = this.renderEducation.bind(this);
  }

  componentDidMount() {
    this.createItem();
  }

  createItem() {
    const key = ["edu", Date.now()].join("_");
    this.keys.push(key);
    this.setState((state) => state);
  }

  deleteItem(e) {
    const key = e.target.name;
    const index = this.keys.indexOf(key);
    this.keys.splice(index, 1);
    this.setState((state) => state);
  }

  renderEducation() {
    const { editModeIsActive } = this.props;
    return this.keys.map((key) => {
      return (
        <div key={key}>
          <EducationItem editModeIsActive={editModeIsActive} />
          {editModeIsActive ? (
            <button name={key} onClick={this.deleteItem}>
              Delete
            </button>
          ) : null}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="education">
        {this.renderEducation()}
        {this.props.editModeIsActive ? (
          <button onClick={this.createItem}>Add Education</button>
        ) : null}
      </div>
    );
  }
}

export default Education;
