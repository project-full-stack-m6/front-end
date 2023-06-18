import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api/axios";

export const getUser = createAsyncThunk(
  "getUsers",
  async () =>
    await instance
      .get(`users`)
      .then((res) => res.data)
      .catch((err) => console.log(err))
);
export const getAllUsers = createAsyncThunk(
  "users/fetchUsers",
  async () =>
    await instance
      .get(`users/all`)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
);
export const updateUser = createAsyncThunk(
  "users/fetchUsers",
  async (userId: number, data: any) =>
    await instance
      .patch(`users/${userId}`, data)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
);
export const deleteUser = createAsyncThunk(
  "users/fetchUsers",
  async (userId: number) =>
    await instance
      .delete(`users/${userId}`)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
);
export const postContact = createAsyncThunk(
  "postContact",
  async (data: any) =>
    await instance
      .post(`wallets`, data)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      })
);
