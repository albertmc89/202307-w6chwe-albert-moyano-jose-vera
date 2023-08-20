import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import NewUserPage from "./NewUserPage";

describe("Given a NewUserPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Add new user' as heading", () => {
      const expectedHeadingText = "Add new user";

      render(
        <Provider store={store}>
          <NewUserPage />
        </Provider>,
      );

      const textHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(textHeading).toBeInTheDocument();
    });
  });
});
