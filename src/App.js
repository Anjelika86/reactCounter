import "./App.css";
import { Component } from "react";
import Counter from "./components/ Counter";
import ControlStepClick from "./components/ControlStepClick";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }
  handleChange = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({
      step: Number(value),
    });
  };

  render() {
    const { step } = this.state;

    return (
      <>
        <Counter step={step} />
        <ControlStepClick step={step} handleChange={this.handleChange} />
      </>
    );
  }
}

export default App;
