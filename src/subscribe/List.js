import React from "react";
import { Subscribe } from "unstated";
import AddContainer from "../container/Add";
import ListContainer from "../container/List";

function List() {
  return (
    <Subscribe to={[AddContainer, ListContainer]}>
      {(add, list) => (
        <>
          <p>
            <button
              onClick={() => {
                list.addList(add.state.value);
              }}
            >
              (Add)
            </button>
          </p>
          <ul>
            {list.state.list.map((number, i) => {
              return <li key={i}>{number}</li>;
            })}
          </ul>
        </>
      )}
    </Subscribe>
  );
}

export default List;
