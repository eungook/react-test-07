import React, { Component } from "react";
import { Provider } from "unstated";

import A from "./component/A";
import B from "./component/B";
import C from "./component/C";

class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <A />
          <B />
          <C />
        </Provider>
      </div>
    );
  }
}

export default App;
