import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { instance } from "../../services/api/axios";

interface iInitialState {
  info: iUser;
  contacts: iUser[] | [];
  token: string;
}

interface iUser {
  name: string;
  email: string;
  phone: string;
  is_staff: boolean;
  is_admin: boolean;
}

const initialState = {
  info: {},
  contacts: [],
  token: "",
};

type iFetchUsersProps = ["get" | "patch" | "delete" | "post", number, any];

export const fetchUsers = createAsyncThunk<
  iUser,
  ["get" | "patch" | "delete" | "post", number, any]
>("users/fetchUsers", async ([method, userId, data]) => {
  const request: Record<string, any> = {
    postUser: async () => await instance.post(`users`, data),
    getUser: async () => await instance.get(`users/${userId}`),
    getAllUsers: async () => await instance.get(`users/all`),
    updateUser: async () => await instance.patch(`users/${userId}`, data),
    deleteUser: async () => await instance.delete(`users/${userId}`),
    addUser: async () => await instance.post(`wallets`, data),
  };

  const response = await request[method];

  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: initialState as iInitialState,
  reducers: {},
});

export const selectUser = (state: AppState) => state.user;

export const select = (state: AppState) => state;

export default userSlice.reducer;
