import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

export const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      //   console.log(action);
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
