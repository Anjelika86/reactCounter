import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickAmount: 0,
    };
  }

  handleClick = () => {
    this.setState((state, props) => ({
      clickAmount: state.clickAmount + props.step,
    }));
  };

  render() {
    const { clickAmount } = this.state;
    const { step } = this.props;

    return (
      <>
        <button onClick={this.handleClick}>Добавить</button>
        <p>Добавлено {clickAmount}</p>
        <p>При нажатии значение увеличится на {step} раз</p>
      </>
    );
  }
}

export default Counter;
