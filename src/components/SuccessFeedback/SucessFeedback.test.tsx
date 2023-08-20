import { render, screen } from "@testing-library/react";
import SuccessFeedback from "./SuccessFeedback";

describe("Given a SuccessFeedback component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Successfully created!' text with an image 'Success toast' alt text", () => {
      const expectedText = "Success toast";
      const expectedTitle = "success";

      render(<SuccessFeedback />);

      const feedbackIcon = screen.getByLabelText(expectedTitle);
      const feedbackText = screen.getByAltText(expectedText);

      expect(feedbackIcon).toBeInTheDocument();
      expect(feedbackText).toBeInTheDocument();
    });
  });
});
