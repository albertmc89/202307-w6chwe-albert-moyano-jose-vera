import { usersMockApi } from "../../mocks/mocksData";
import { UserState } from "../types";
import {
  addUserActionCreator,
  loadUsersActionCreator,
  toggleUserActionCreator,
  usersReducer,
} from "./UsersSlice";

describe("Given a usersReducer reducer", () => {
  describe("When it receives a load users action with two users", () => {
    test("Then it should return a new state with the received two users", () => {
      const currentUserState: UserState = {
        users: [],
      };
      const users = usersMockApi;

      const loadUsersAction = loadUsersActionCreator(users);

      const newUserState = usersReducer(currentUserState, loadUsersAction);

      expect(newUserState).toHaveProperty("users", users);
    });
  });

  describe("When it receives a state with 2 users and a toggleUser action with id 1", () => {
    test("Then it should return a new state with 2 user and the property 'isFriend' of the user with id '1' changed", () => {
      const currentUsersState: UserState = {
        users: usersMockApi,
      };

      const idToToggle = 1;

      const toggleIsFriendAction = toggleUserActionCreator(idToToggle);
      const newUsersState = usersReducer(
        currentUsersState,
        toggleIsFriendAction,
      );

      const toggledUser = newUsersState.users.find(
        (users) => users.id === idToToggle,
      );

      expect(toggledUser).toHaveProperty("isFriend", false);
    });
  });

  describe("When it receives a state with one user and addUser action", () => {
    test("Then it should return a new state with the user with id 11 added", () => {
      const currentUsersState: UserState = {
        users: usersMockApi,
      };

      const userToAdd = {
        id: 11,
        name: "Benito Camelas",
        age: 87,
        sex: "Male",
        picture: "",
        location: "",
        isFriend: true,
      };

      const addUserAction = addUserActionCreator(userToAdd);

      const newUserState = usersReducer(currentUsersState, addUserAction);

      expect(newUserState.users).toContain(userToAdd);
      expect(newUserState.users).toHaveLength(
        currentUsersState.users.length + 1,
      );
    });
  });
});
