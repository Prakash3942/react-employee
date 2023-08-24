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
        return (updatingUser.name = name), (updatingUser.email = email);
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const deletingUser = state.find((user) => user.id == id);
      if (deletingUser) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
