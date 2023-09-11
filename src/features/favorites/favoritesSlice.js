import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../../hooks/useLocalStorage";

const favesFromLocalStorage = loadFromLocalStorage();
const savedFavorites = favesFromLocalStorage?.favorites.favorites;

const initialState = {
  favorites: savedFavorites ? savedFavorites : [],
};

const favortiesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload,
      );
    },
  },
});

export const getFavorites = (state) => state.favorites.favorites;

export const { addToFavorites, deleteFromFavorites, checkFavorites } =
  favortiesSlice.actions;

export default favortiesSlice.reducer;
