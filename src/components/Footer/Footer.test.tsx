import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a name company, street and phone number", () => {
      const companyTest = "company";
      const streetTest = "street";
      const phoneTest = "phone";

      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      );

      const footerCompanyText = screen.getByLabelText(companyTest);
      const footerStreetText = screen.getByLabelText(streetTest);
      const footerPhoneText = screen.getByLabelText(phoneTest);

      expect(footerCompanyText).toBeInTheDocument();
      expect(footerStreetText).toBeInTheDocument();
      expect(footerPhoneText).toBeInTheDocument();
    });
  });
});

describe("Given a Footer component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the links 'Home' and 'Add new relationship'", () => {
      const navHome = "Home";
      const navAdd = "Add new relationship";

      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      );

      const navLinkHome = screen.getByRole("link", { name: navHome });
      const navLinkAdd = screen.getByRole("link", { name: navAdd });

      expect(navLinkHome).toBeInTheDocument();
      expect(navLinkAdd).toBeInTheDocument();
    });
  });
});
