import { createSlice } from "@reduxjs/toolkit";
import ProfileData from "./Data";

const dataSlice = createSlice({
  name: "data",
  initialState: ProfileData,
});

export default dataSlice;
