import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${() => window.localStorage.getItem("authToken")}`,
  },
});
