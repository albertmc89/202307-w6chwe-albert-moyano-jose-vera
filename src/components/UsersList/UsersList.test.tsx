import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
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
});
