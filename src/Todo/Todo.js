import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteMe } from "./TodoReducer";

const Todo = () => {
  const [todo, setTodos] = useState("");
  const dispatch = useDispatch();
  const todolist = useSelector((s) => s.todos);

  const addit = () => {
    dispatch(add(todo));
    setTodos("");
  };

  return (
    <>
      <h1>Todos</h1>
      <label>add todo </label>
      <input value={todo} onChange={(e) => setTodos(e.target.value)}></input>
      <button onClick={() => addit()}>add it </button>
      {todolist.length > 0 && <h3>todo List</h3>}
      {todolist.map((t, idx) => (
        <div key={t}>
          <span>{t}</span>&nbsp;&nbsp;&nbsp;
          <button onClick={() => dispatch(deleteMe(idx))}>delete it</button>
        </div>
      ))}
    </>
  );
};

export default Todo;
