import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

const initialUiState: UiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    startLoading: (): UiState => ({ isLoading: true }),
  },
});

export const uiReducer = uiSlice.reducer;
export const { startLoading: startLoadingActionCreator } = uiSlice.actions;
