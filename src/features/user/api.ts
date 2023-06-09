"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api/axios";

export const postUser = createAsyncThunk(
  "users/fetchUsers",
  async (data: any) =>
    await instance
      .post(`users`, data)
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err))
);
export const getUser = createAsyncThunk(
  "users/fetchUsers",
  async () =>
    await instance
      .get(`users`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
        res.status === 401 && localStorage.removeItem("authToken");
      })
      .catch((err) => {
        err.response.status === 401 && localStorage.removeItem("authToken");
      })
);
export const getAllUsers = createAsyncThunk(
  "users/fetchUsers",
  async () =>
    await instance
      .get(`users/all`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
        res.status === 401 && localStorage.removeItem("authToken");
      })
      .catch((err) => {
        err.response.status === 401 && localStorage.removeItem("authToken");
      })
);
export const updateUser = createAsyncThunk(
  "users/fetchUsers",
  async (userId: number, data: any) =>
    await instance
      .patch(`users/${userId}`, data)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
        res.status === 401 && localStorage.removeItem("authToken");
      })
      .catch((err) => {
        err.response.status === 401 && localStorage.removeItem("authToken");
      })
);
export const deleteUser = createAsyncThunk(
  "users/fetchUsers",
  async (userId: number) =>
    await instance
      .delete(`users/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
        res.status === 401 && localStorage.removeItem("authToken");
      })
      .catch((err) => {
        err.response.status === 401 && localStorage.removeItem("authToken");
      })
);
export const addUser = createAsyncThunk(
  "users/fetchUsers",
  async (data: any) =>
    await instance
      .post(`wallets`, data)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
        res.status === 401 && localStorage.removeItem("authToken");
      })
      .catch((err) => {
        err.response.status === 401 && localStorage.removeItem("authToken");
      })
);
export const loginUser = createAsyncThunk(
  "users/fetchUsers",
  async (data: any) =>
    await instance
      .post(`login`, data)
      .then((res) => {
        if (res.status === 201) {
          window.localStorage.setItem("authToken", res.data.token);
          console.log(window.localStorage.getItem("authToken"), res.headers);
          return res.data;
        }
        alert("error");
      })
      .catch((err) => console.log(err))
);
