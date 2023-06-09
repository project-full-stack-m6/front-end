import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../store";

export interface iInitialState {
  user: null | iUser;
  error: string | null;
  loading: boolean | null;
}

export interface iUser {
  name: string;
  email: string;
  phone: string;
  is_staff: boolean;
  is_admin: boolean;
  my_wallet: Object[];
}

const initialState = {
  user: null,
  error: null,
  loading: null,
};

// export const fetchUsers = createAsyncThunk<iUser, [string, number, any]>(
//   "users/fetchUsers",
//   ([method, userId, data]) => {
//     const request: Record<string, any> = {
//       postUser: async () => await instance.post(`users`, data),
//       getUser: async () => await instance.get(`users/${userId}`),
//       getAllUsers: async () => await instance.get(`users/all`),
//       updateUser: async () => await instance.patch(`users/${userId}`, data),
//       deleteUser: async () => await instance.delete(`users/${userId}`),
//       addUser: async () => await instance.post(`wallets`, data),
//     };

//     const response = request[method].catch((err: any) => console.log(err));

//     return response.data;
//   }
// );

export const userSlice = createSlice({
  name: "user",
  initialState: initialState as iInitialState,
  reducers: {
    addUser: (state, action: PayloadAction<iUser>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = true;
          state.error = action.error.message;
        }
      );
  },
});

export const selectUser = (state: AppState) => state.user;

export const select = (state: AppState) => state;

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
