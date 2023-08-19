import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";
import { UserState } from "../types";

const initialUsersState: UserState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    loadUsers: (
      currentUsersState,
      action: PayloadAction<User[]>,
    ): UserState => ({
      ...currentUsersState,
      users: action.payload,
    }),
  },
});

export const usersReducer = usersSlice.reducer;
export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;
