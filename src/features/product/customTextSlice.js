import { createSlice } from "@reduxjs/toolkit";
import { getCustomColorCss } from "../../utils/helpers";

const initialState = {
  customText: "",
  customFontCss: "font-anton",
  customFontDisplay: "Anton",
  customColorCss: "black",
  customColorDisplay: "Black",
};

const customTextSlice = createSlice({
  name: "customText",
  initialState,
  reducers: {
    updateCustomText(state, action) {
      state.customText = action.payload;
    },
    updateCustomColor(state, action) {
      state.customColorCss = getCustomColorCss(action.payload);
      state.customColorDisplay = action.payload;
    },
    updateCustomFont(state, action) {
      state.customFontCss = action.payload;
      state.customFontDisplay = action.payload.replace("font-", "");
    },
    reset: () => initialState,
  },
});

export const getCustomStyles = (state) => state.customText;

export const { updateCustomText, updateCustomColor, updateCustomFont, reset } =
  customTextSlice.actions;

export default customTextSlice.reducer;
