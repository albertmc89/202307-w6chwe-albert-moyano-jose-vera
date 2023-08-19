import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the links 'Home' and 'Add new relationship'", () => {
      const navHome = "Home";
      const navAdd = "Add new relationship";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const navLinkHome = screen.getByRole("link", { name: navHome });
      const navLinkAdd = screen.getByRole("link", { name: navAdd });

      expect(navLinkHome).toBeInTheDocument();
      expect(navLinkAdd).toBeInTheDocument();
    });
  });
});
