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
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatingUser = state.find((user) => user.id == id);
      if (updatingUser) {
        (updatingUser.name = name), (updatingUser.email = email);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
