import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api/axios";
import { toast } from "react-toastify";

export const getUser = createAsyncThunk(
  "getUsers",
  async () =>
    await instance
      .get(`users`)
      .then((res) => res.data)
      .catch((err) => {
        toast.error(err.response.data.message[0]);
      })
);
export const getAllUsers = createAsyncThunk(
  "users/fetchUsers",
  async () =>
    await instance
      .get(`users/all`)
      .then((res) => res.data)
      .catch((err) => {
        toast.error(err.response.data.message[0]);
      })
);
export const patchUser = createAsyncThunk(
  "users/fetchUsers",
  async (data: any) =>
    await instance
      .patch(`users`, data)
      .then((res) => res.data)
      .catch((err) => {
        toast.error(err.response.data.message[0]);
      })
);
export const deleteUser = createAsyncThunk(
  "users/fetchUsers",
  async () =>
    await instance
      .delete(`users`)
      .then((res) => {
        toast.success("Usuário deletado com sucesso");
        return res.data;
      })
      .catch((err) => {
        toast.error(err.response.data.message[0]);
      })
);
export const postContact = createAsyncThunk(
  "postContact",
  async (data: any) =>
    await instance
      .post(`wallets`, data)
      .then((res) => {
        toast.success("Contato adicionado com sucesso");
        return res.data;
      })
      .catch((err) => {
        toast.error(err.response.data.message[0]);
      })
);
export const removeContact = createAsyncThunk(
  "updateContact",
  async (contactId: number) =>
    await instance
      .patch(`wallets/${contactId}`)
      .then((res) => {
        toast.success("Contato deletado com sucesso");
        return res.data;
      })
      .catch((err) => {
        toast.error(err.response.data.message[0]);
      })
);
