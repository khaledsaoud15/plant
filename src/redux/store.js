import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userSlice from "./userSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    user: userSlice,
    product: productSlice,
  },
});
