import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { register } = usersSlice.actions;
export default usersSlice.reducer;
