import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { usersMockApi } from "../../mocks/mocksData";
import { store } from "../../store";
import UserCard from "./UserCard";

describe("Given a UserCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with the alternate text 'Close-up of Armando Bronca'", () => {
      const alternateImageText = "Close-up of Armando Bronca";

      render(
        <Provider store={store}>
          <UserCard user={usersMockApi[0]} />
        </Provider>,
      );

      const userImage = screen.getByAltText(alternateImageText);

      expect(userImage).toBeInTheDocument();
    });

    test("Then it should show the heading text 'Armando Bronca'", () => {
      const headingText = "Armando Bronca";

      render(
        <Provider store={store}>
          <UserCard user={usersMockApi[0]} />
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
