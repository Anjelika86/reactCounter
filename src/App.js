import "./App.css";
import { Component } from "react";
import Counter from "./components/ Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }
  handleChange = (e) => {
    // const { step } = this.state;
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
        <input
          value={this.state.value}
          onChange={this.handleChange}
          type="number"
          name="number"
          placeholder="0"
        />
        <Counter step={step} />
      </>
    );
  }
}

export default App;
