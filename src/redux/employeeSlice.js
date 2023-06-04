import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    fullName: "Abdullah Ryan",
    position: "Safety Officer",
    salary: 200000,
    totalDeduction: 0,
    totalEarning: 0,
    components: [
      { id: 1, name: "Tax", type: "Deduction", amount: 15000 },
      { id: 2, name: "Transport", type: "Earning", amount: 40000 },
    ],
  },
  {
    id: 2,
    fullName: "Ahmad Brown",
    position: "PRO",
    salary: 220000,
    totalDeduction: 0,
    totalEarning: 0,
    components: [
      { id: 2, name: "Transport", type: "Earning", amount: 40000 },
      { id: 3, name: "Pension", type: "Deduction", amount: 20000 },
    ],
  },
  {
    id: 3,
    fullName: "Zayn Chowdury",
    position: "Accountant",
    salary: 250000,
    totalDeduction: 0,
    totalEarning: 0,
    components: [
      { id: 3, name: "Pension", type: "Deduction", amount: 20000 },
      { id: 4, name: "Housing", type: "Deduction", amount: 10000 },
      { id: 5, name: "Basic", type: "Earning", amount: 12000 },
    ],
  },
];

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addDeduction: (state, action) => {
      const { id, amount } = action.payload;
      state[id - 1].totalDeduction += amount;
    },
    subtractDeduction: (state, action) => {
      const { id, amount } = action.payload;
      state[id - 1].totalDeduction -= amount;
    },
    startDeduction: (state, action) => {
      const { id, amount } = action.payload;
      state[id - 1].totalDeduction = amount;
    },
    addEarning: (state, action) => {
      const { id, amount } = action.payload;
      state[id - 1].totalEarning += amount;
    },
    subtractEarning: (state, action) => {
      const { id, amount } = action.payload;
      state[id - 1].totalEarning -= amount;
    },
    startEarning: (state, action) => {
      const { id, amount } = action.payload;
      state[id - 1].totalEarning = amount;
    },
  },
});

export const employeeReducer = employeesSlice.reducer;
export const {
  addDeduction,
  subtractDeduction,
  startDeduction,
  addEarning,
  subtractEarning,
  startEarning,
} = employeesSlice.actions;
