import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "{counter} ",
  initialState: { value: 0 },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increamentCustom: (state, action) => {
      state.value += parseInt(action.payload.value);
    }
  }
});

export const { increament, decrement, increamentCustom } = CounterSlice.actions;

export default CounterSlice.reducer;
