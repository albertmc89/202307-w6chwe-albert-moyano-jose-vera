import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a name company, street and phone number", () => {
      const companyTest = "company";
      const streetTest = "company";
      const phoneTest = "company";

      render(<Footer />);

      const footerCompanyText = screen.getByLabelText(companyTest);
      const footerStreetText = screen.getByLabelText(streetTest);
      const footerPhoneText = screen.getByLabelText(phoneTest);

      expect(footerCompanyText).toBeInTheDocument();
      expect(footerStreetText).toBeInTheDocument();
      expect(footerPhoneText).toBeInTheDocument();
    });
  });
});
