import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../store";

export interface iInitialState {
  user: null | iUser;
  contacts: iUser[];
  error: string | null;
  loading: boolean | null;
  navigation: boolean;
}

export interface iUser {
  name: string;
  email: string;
  phone: string;
  is_staff: boolean;
  is_admin: boolean;
  my_wallet: { contacts: iUser[] };
}

const initialState = {
  user: null,
  contacts: [],
  error: null,
  loading: null,
  navigation: false,
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
      if (action.payload) {
        console.log(action.payload);
        state.user = action.payload;
        state.contacts = action.payload.my_wallet?.contacts || [];
      }
    },
    addContact: (state, action: PayloadAction<any>) => {
      if (action.payload) {
        state.contacts = action.payload.contacts;
      }
    },
    removeUser: (state) => {
      state.user = null;
    },
    shouldNavigation: (state) => {
      console.log(state);
      state.navigation = true;
    },
    resetNavigation: (state) => {
      state.navigation = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(getUser.fulfilled, (state, action) => {
      //   console.log(state);
      // })
      .addMatcher(
        (action) => {
          return action.type.endsWith("/pending");
        },
        (state, action) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          // console.log("rejected", action);
          state.loading = false;
          state.error = action.error.message;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          // console.log("fulfilled", action);
          state.loading = false;
        }
      );
  },
});

export const selectUser = (state: AppState) => state.user;

export const select = (state: AppState) => state;

export const {
  addUser,
  removeUser,
  addContact,
  resetNavigation,
  shouldNavigation,
} = userSlice.actions;

export default userSlice.reducer;
