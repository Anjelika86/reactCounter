import { Component } from "react";

class ControlStepClick extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <>
        <input
          onChange={handleChange}
          type="number"
          name="number"
          placeholder="0"
        />
      </>
    );
  }
}

export default ControlStepClick;
