import { Component } from "react";
import EmploymentItem from "./EmploymentItem";
import "./Employment.css";

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.keys = [];

    this.createItem = this.createItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.renderEmployment = this.renderEmployment.bind(this);
  }

  componentDidMount() {
    this.createItem();
  }

  createItem() {
    const key = ["emp", Date.now()].join("_");
    this.keys.push(key);
    this.setState((state) => state);
  }

  deleteItem(e) {
    const key = e.target.name;
    const index = this.keys.indexOf(key);
    this.keys.splice(index, 1);
    this.setState((state) => state);
  }

  renderEmployment() {
    const { editModeIsActive } = this.props;
    return this.keys.map((key) => {
      return (
        <div key={key}>
          <EmploymentItem editModeIsActive={editModeIsActive} />
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
      <div className="employment">
        {this.renderEmployment()}
        {this.props.editModeIsActive ? (
          <button onClick={this.createItem}>Add Employment</button>
        ) : null}
      </div>
    );
  }
}

export default Employment;
