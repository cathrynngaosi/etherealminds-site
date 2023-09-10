import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  showRequired: "hidden",
  showCartNotif: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (action.payload !== "") {
        state.showRequired = "hidden";
        state.showCartNotif = true;
        state.cart.push(action.payload);
        window.scrollTo(0, 0);
      } else {
        state.showRequired = "block";
      }
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseQty(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.qty++;
      item.totalPrice = item.qty * item.unitPrice;
    },
    decreaseQty(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.qty--;
      item.totalPrice = item.qty * item.unitPrice;

      if (item.qty === 0)
        state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    closeCartNotif(state, action) {
      state.showCartNotif = action.payload;
    },
  },
});

export const getCart = (state) => state.cart.cart;
export const getShowRequired = (state) => state.cart.showRequired;
export const getShowCartNotif = (state) => state.cart.showCartNotif;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.qty, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);

export const {
  addToCart,
  deleteFromCart,
  increaseQty,
  decreaseQty,
  closeCartNotif,
} = cartSlice.actions;

export default cartSlice.reducer;
