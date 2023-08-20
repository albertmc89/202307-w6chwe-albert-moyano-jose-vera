import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewUserForm from "./NewUserForm";

describe("Given a NewUserForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Name', 'Age', 'Sex', 'Image', 'Location' fields", () => {
      const nameInputLabelText = "Name:";
      const ageInputLabelText = "Age:";
      const sexInputLabelText = "Sex:";
      const imageInputLabelText = "Image:";
      const locationInputLabelText = "Location:";

      render(<NewUserForm />);

      const nameInput = screen.getByLabelText(
        nameInputLabelText,
      ) as HTMLInputElement;
      const ageInput = screen.getByLabelText(
        ageInputLabelText,
      ) as HTMLInputElement;
      const sexInput = screen.getByLabelText(
        sexInputLabelText,
      ) as HTMLInputElement;
      const imageInput = screen.getByLabelText(
        imageInputLabelText,
      ) as HTMLInputElement;
      const locationInput = screen.getByLabelText(
        locationInputLabelText,
      ) as HTMLInputElement;

      expect(nameInput).toBeInTheDocument();
      expect(ageInput).toBeInTheDocument();
      expect(sexInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
      expect(locationInput).toBeInTheDocument();
    });
  });

  describe("When user writes 'Armando Bronca', '24', 'Male', 'Bogotá', 'https://www.pngmart.com/files/7/Guy-PNG-Photos.png'", () => {
    test("Then it should show 'Armando Bronca', '24', 'Male', 'Bogotá', 'https://www.pngmart.com/files/7/Guy-PNG-Photos.png'", async () => {
      const nameText = "Armando Bronca";
      const ageNumber = 24;
      const sexText = "Male";
      const locationText = "Bogotá";
      const imageText = "https://www.pngmart.com/files/7/Guy-PNG-Photos.png";

      render(<NewUserForm />);

      const name = screen.getByRole("textbox", {
        name: /name:/i,
      }) as HTMLInputElement;
      const age = screen.getByRole("spinbutton", {
        name: /age/i,
      }) as HTMLInputElement;
      const sex = screen.getByRole("textbox", {
        name: /sex/i,
      }) as HTMLInputElement;
      const location = screen.getByRole("textbox", {
        name: /location/i,
      }) as HTMLInputElement;
      const image = screen.getByRole("textbox", {
        name: /image/i,
      }) as HTMLInputElement;

      await userEvent.type(name, nameText);
      await userEvent.type(age, ageNumber.toString());
      await userEvent.type(sex, sexText);
      await userEvent.type(location, locationText);
      await userEvent.type(image, imageText);

      expect(name.value).toBe(nameText);
      expect(age.value).toBe(ageNumber.toString());
      expect(sex.value).toBe(sexText);
      expect(location.value).toBe(locationText);
      expect(image.value).toBe(imageText);
    });
  });
});
