import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { usersMockApi } from "../../mocks/mocksData";
import { setupStore, store } from "../../store";
import UsersList from "./UsersList";

describe("Given a UsersList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Users list' as heading", () => {
      const expectedHeadingText = "Users list";

      render(
        <Provider store={store}>
          <UsersList />
        </Provider>,
      );

      const textHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(textHeading).toBeInTheDocument();
    });
  });

  describe("When it's received with the users 'Armando Bronca' and 'Olivia Wilde'", () => {
    test("Then it should show the user 'Armando Bronca' and user 'Olivia Wilde' inside headings", () => {
      const store = setupStore({
        usersState: {
          users: usersMockApi,
        },
      });

      render(
        <Provider store={store}>
          <UsersList />
        </Provider>,
      );

      usersMockApi.forEach((user) => {
        const userHeading = screen.getByRole("heading", { name: user.name });

        expect(userHeading).toBeInTheDocument();
      });
    });
  });
});
