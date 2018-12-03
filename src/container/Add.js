import { Container } from "unstated";

class Add extends Container {
  state = { value: 0 };
  plus = () => {
    this.setState({
      ...this.state,
      value: this.state.value + 1
    });
  };
  minus = () => {
    this.setState({
      ...this.state,
      value: this.state.value - 1
    });
  };
  setValue = e => {
    this.setState({
      ...this.state,
      value: parseInt(e.target.value)
    });
  };
}

export default Add;
