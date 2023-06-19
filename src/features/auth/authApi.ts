import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api/axios";
import { iUser } from "../user/userSlice";

export const postUser = createAsyncThunk(
  "users/fetchUsers",
  async (data: any) =>
    await instance
      .post(`users`, data)
      .then((res) => res.data)
      .catch((err) => console.log(err))
);

export const loginUser = createAsyncThunk("users/fetchUsers", (data: iUser) =>
  instance
    .post(`login`, data)
    .then((res) => {
      if (res.status === 201) {
        window.localStorage.setItem("authToken", res.data.token);
        console.log("usuário logado", localStorage.getItem("authToken"));
        return res.data;
      }
    })
    .catch((err) => {
      alert("error");
      console.log(err);
    })
);
