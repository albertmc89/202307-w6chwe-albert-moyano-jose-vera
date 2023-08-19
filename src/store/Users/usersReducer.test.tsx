import { usersMock } from "../../mocks/mocksData";
import { UserState } from "../types";
import { loadUsersActionCreator, usersReducer } from "./UsersSlice";

describe("Given a usersReducer reducer", () => {
  describe("When it receives a load users action with two users", () => {
    test("Then it should return a new state with the received two users", () => {
      const currentToDosState: UserState = {
        users: [],
      };
      const users = usersMock;

      const loadUsersAction = loadUsersActionCreator(users);

      const newToDoState = usersReducer(currentToDosState, loadUsersAction);

      expect(newToDoState).toHaveProperty("users", users);
    });
  });
});
