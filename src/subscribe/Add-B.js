import React from "react";
import { Subscribe } from "unstated";
import Add from "../container/Add";

function AddB() {
  return (
    <Subscribe to={[Add]}>
      {add => (
        <div>
          <button onClick={add.plus}>(+)</button>
          <button onClick={add.minus}>(-)</button>
        </div>
      )}
    </Subscribe>
  );
}

export default AddB;
