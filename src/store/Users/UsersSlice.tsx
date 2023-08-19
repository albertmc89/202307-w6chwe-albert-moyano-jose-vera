import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ApiUser } from "../../types";
import { UserState } from "../types";

const initialUsersState: UserState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    loadUsers: (
      _currentUsersState,
      action: PayloadAction<ApiUser[]>,
    ): UserState => ({
      users: action.payload,
    }),
  },
});

export const usersReducer = usersSlice.reducer;
export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;
