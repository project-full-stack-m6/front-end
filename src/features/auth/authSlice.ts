import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../store";

interface iInitialState {
  token: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: { token: "login" } as iInitialState,
  reducers: {},
});

export const selectAuth = (state: AppState) => state.auth;

export const select = (state: AppState) => state;

export default authSlice.reducer;
