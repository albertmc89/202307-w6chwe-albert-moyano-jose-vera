import { usersMockApi } from "../../mocks/mocksData";
import { UserState } from "../types";
import { loadUsersActionCreator, usersReducer } from "./UsersSlice";

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
});
