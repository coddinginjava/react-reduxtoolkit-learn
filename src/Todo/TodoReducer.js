import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "Todos-",
  initialState: [],
  reducers: {
    add: (state, { payload }) => {
      state.push(payload);
    },
    deleteMe: (state, { payload }) => {
      state.splice(parseInt(payload), 1);
    }
  }
});

export const { add, deleteMe } = TodoSlice.actions;
export default TodoSlice.reducer;
