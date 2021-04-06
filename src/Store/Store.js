import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../counter/CounterReducer";
import TodoReducer from "../Todo/TodoReducer";

export default configureStore({
  reducer: {
    counter: CounterReducer,
    todos: TodoReducer
  }
});
