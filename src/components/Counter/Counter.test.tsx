import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { usersMockApi } from "../../mocks/mocksData";
import { setupStore } from "../../store";
import Counter from "./Counter";

describe("Given a Counter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the number of users that are friends and the number of users that are enemies'", () => {
      const store = setupStore({ usersState: { users: usersMockApi } });

      const friendsCount = usersMockApi.filter(
        (user) => user.isFriend === true,
      ).length;
      const enemiesCount = usersMockApi.filter(
        (user) => user.isFriend === false,
      ).length;

      const expectedFriendsText = `${friendsCount} users are friends`;
      const expectedEnemiesText = `${enemiesCount} users are enemies`;

      render(
        <Provider store={store}>
          <Counter />
        </Provider>,
      );

      const totalFriends = screen.getByText(expectedFriendsText);
      const totalEnemies = screen.getByText(expectedEnemiesText);

      expect(totalFriends).toBeInTheDocument();
      expect(totalEnemies).toBeInTheDocument();
    });
  });
});
