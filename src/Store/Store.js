import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./DataSlice";
import paginationSlice from "./PaginationSlice";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    pagination: paginationSlice,
  },
});
export default store;
