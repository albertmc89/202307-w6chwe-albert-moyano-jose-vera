import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Serial Friends' inside a heading", () => {
      const title = "Serial Friends";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      );

      const headingTitle = screen.getByRole("heading", { name: title });

      expect(headingTitle).toBeInTheDocument();
    });
  });
});
