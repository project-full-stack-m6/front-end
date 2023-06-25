import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api/axios";
import { iUser } from "../user/userSlice";
import { toast } from "react-toastify";

export const postUser = createAsyncThunk(
  "users/fetchUsers",
  async (data: any) =>
    await instance
      .post(`users`, data)
      .then((res) => {
        toast.success("Usuário cadastrado com sucesso");
        return res.data;
      })
      .catch((err) => toast.error(err.response.data.message[0]))
);

export const loginUser = createAsyncThunk("users/fetchUsers", (data: iUser) =>
  instance
    .post(`login`, data)
    .then((res) => {
      window.localStorage.setItem("authToken", res.data.token);
      toast.success("Login efeituado com sucesso");
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.response.data.message);
    })
);
