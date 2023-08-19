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
    toggleUser: (
      currentUsersState,
      action: PayloadAction<number>,
    ): UserState => ({
      ...currentUsersState,
      users: currentUsersState.users.map((user) =>
        user.id === action.payload
          ? { ...user, isFriend: !user.isFriend }
          : { ...user },
      ),
    }),
  },
});

export const usersReducer = usersSlice.reducer;
export const {
  loadUsers: loadUsersActionCreator,
  toggleUser: toggleUserActionCreator,
} = usersSlice.actions;
