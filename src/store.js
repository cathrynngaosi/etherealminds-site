import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import customTextSlice from "./features/product/customTextSlice";
import favoritesSlice from "./features/favorites/favoritesSlice";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "./hooks/useLocalStorage";

const rootReducers = combineReducers({
  cart: cartSlice,
  customText: customTextSlice,
  favorites: favoritesSlice,
});

const store = configureStore({ reducer: rootReducers }, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
