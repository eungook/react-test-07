import { Container } from "unstated";

class List extends Container {
  state = { list: [] };
  addList = number => {
    this.setState({
      ...this.state,
      list: [...this.state.list, number]
    });
  };
}

export default List;
