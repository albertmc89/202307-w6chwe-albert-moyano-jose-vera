import { UiState } from "./types";
import { startLoadingActionCreator, uiReducer } from "./uiSlice";

describe("Given a uiSlice reducer", () => {
  describe("When it is called with a startLoading action and a currentState with a property isLoading set to false", () => {
    test("Then it should return a new state with the property isLoading to true", () => {
      const currentUiState: UiState = {
        isLoading: false,
      };

      const showLoadingAction = startLoadingActionCreator();

      const newUiState = uiReducer(currentUiState, showLoadingAction);

      expect(newUiState).toHaveProperty("isLoading", true);
    });
  });
});
