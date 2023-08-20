import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { usersMock } from "../../mocks/mocksData";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives a text 'friend' or 'enemy'", () => {
    test("Then it should show a text 'friend' or 'enemy'", () => {
      const mockFunction = vi.fn();
      const userMock = usersMock[1];
      const expectedText = "enemy";

      render(
        <Button
          actionOnClick={mockFunction}
          text={userMock.isFriend ? "friend" : "enemy"}
          className="button"
        />,
      );

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });

    describe("When it receives a function and the user clicks the button", () => {
      test("Then it should call the function", async () => {
        const mockFunction = vi.fn();
        const userMock = usersMock[1];
        const initialText = "enemy";

        render(
          <Button
            actionOnClick={mockFunction}
            text={userMock.isFriend ? "friend" : "enemy"}
            className="button"
          />,
        );

        const initialButton = screen.getByRole("button", { name: initialText });
        await userEvent.click(initialButton);

        expect(mockFunction).toHaveBeenCalled();
      });
    });
  });
});
