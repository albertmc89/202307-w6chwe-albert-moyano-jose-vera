import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Serial Friends Logo'", () => {
      const imageAltText = "Serial Friends Logo";

      render(<Header />);

      const imageElement = screen.getByAltText(imageAltText);

      expect(imageElement).toBeInTheDocument();
    });
  });

  test("Then it should show a 'Serial Friends' inside a heading", () => {
    const titleExpected = "Serial Friends";

    render(<Header />);

    const headingTitle = screen.getByRole("heading", { name: titleExpected });

    expect(headingTitle).toBeInTheDocument();
  });

  test("Then it should show a 'Filter your friends' inside a heading", () => {
    const titleExpected = "Filter your friends";

    render(<Header />);

    const headingTitle = screen.getByRole("heading", { name: titleExpected });

    expect(headingTitle).toBeInTheDocument();
  });
});
