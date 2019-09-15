import React, { useEffect, useState } from "react";
import { createStore } from "redux";
const todo = ["fare la spesa", "fare i compiti", "prendere la mamma"];
const ReduxTodolist = () => {
  const [state, setState] = useState({
    todos: []
  });
  const storeReducer = (state = {}, action) => {
    return { ...state };
  };
  const todoInput = React.createRef("add-todo");
  // const [state, dispatch] = useReducer(reducer, initialState, init)
  useEffect(() => {
    const store = createStore(storeReducer, { todos: [...todo] });
    console.log(store.getState().todos);
    setState({ todos: store.getState().todos });

    // return () => {
    //  cleanup
    // };
  }, []);
  return (
    <div className="container">
      <ul className="list-group list-group-flush">
        <h1 className="text-center display-3 font-weight-bold">To do List</h1>
        <input
          ref={todoInput}
          type="text"
          className="form-control mb-4 mx-auto w-25"
          placeholder="e.g 'prendi il cane'"
        />
        {state.todos.map((res, i) => (
          <li
            className="list-group-item list-group-item-action list-group-item-primary "
            key={i}
          >
            {res}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ReduxTodolist;
