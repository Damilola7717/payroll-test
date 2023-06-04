import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Tax", type: "Deduction", amount: 15000 },
  { id: 2, name: "Transport", type: "Earning", amount: 40000 },
  { id: 3, name: "Pension", type: "Deduction", amount: 20000 },
  { id: 4, name: "Housing", type: "Deduction", amount: 10000 },
  { id: 5, name: "Basic", type: "Earning", amount: 12000 },
  { id: 6, name: "Medical", type: "Earning", amount: 11500 },
];

const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const { id, name, type, amount } = action.payload;
      const newComponent = { id: id, name: name, type: type, amount: amount };
      state.push(newComponent);
    },
  },
});

export const componentReducer = componentSlice.reducer;
export const { addComponent } = componentSlice.actions;
