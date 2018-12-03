import React from "react";
import { Subscribe } from "unstated";
import Add from "../container/Add";

function AddA() {
  return (
    <Subscribe to={[Add]}>{add => <p>value: {add.state.value}</p>}</Subscribe>
  );
}

export default AddA;
