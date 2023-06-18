import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer, { shouldNavigation } from "./features/user/userSlice";
import authReducer from "./features/auth/authSlice";

const protectUser = (store) => (next) => (action) => {
  const user = store.getState().user;

  if (action.type !== "getUsers" && !user) {
    store.dispatch(shouldNavigation);
  }

  return next(action);
};

export function makeStore() {
  return configureStore({
    reducer: { user: userReducer, auth: authReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: protectUser,
        },
        serializableCheck: false,
      }).concat(protectUser),
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
