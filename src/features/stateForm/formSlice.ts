import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../store";

interface iInitialState {
  status: string;
}

export const formSlice = createSlice({
  name: "form",
  initialState: { status: "login" } as iInitialState,
  reducers: {
    makeForm: (state) => {
      if (state.status === "login") {
        state.status = "register";
      } else {
        state.status = "login";
      }
    },
  },
});

export const { makeForm } = formSlice.actions;

export const selectForm = (state: AppState) => state.form.status;

export const select = (state: AppState) => state;

export default formSlice.reducer;
