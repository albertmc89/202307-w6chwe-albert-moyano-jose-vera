import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Serial Friends Logo'", () => {
      const imageAltText = "Serial Friends Logo";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const imageElement = screen.getByAltText(imageAltText);

      expect(imageElement).toBeInTheDocument();
    });
  });

  test("Then it should show a 'Serial Friends' title and 'Filter your friends' subtitle inside a heading", () => {
    const titleExpected = "Serial Friends";
    const subTitleExpected = "Filter your friends";

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const headingTitle = screen.getByRole("heading", {
      name: titleExpected,
    });
    const headingSubTitle = screen.getByRole("heading", {
      name: subTitleExpected,
    });

    expect(headingTitle).toBeInTheDocument();
    expect(headingSubTitle).toBeInTheDocument();
  });
});
