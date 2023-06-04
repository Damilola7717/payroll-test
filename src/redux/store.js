import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "./employeeSlice";
import { componentReducer } from "./componentSlice";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    components: componentReducer,
  },
});

export default store;
