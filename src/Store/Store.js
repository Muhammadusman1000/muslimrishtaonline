import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./DataSlice";
import paginationSlice from "./PaginationSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    pagination: paginationSlice,
    cart: CartSlice,
  },
});
export default store;
