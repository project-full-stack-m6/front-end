import axios from "axios";
import { useAppSelector } from "../../hooks";
import { select, selectAuth } from "../../features/auth/authSlice";

// const auth = useAppSelector(selectAuth);

export const instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 3000,
  headers: {
    "Context-Type": "application/json",
    Authorization: `Bearer ${"auth.token"}`,
  },
});
