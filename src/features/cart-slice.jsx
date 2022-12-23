import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // checking if an item exist in the cart
      const { product } = action.payload;
      const existingItem = state.value.find(
        ({ product: prod }) => prod.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.value.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      const { product } = action.payload;
      const index = state.value.findIndex(
        ({ product: prod }) => prod.id === product.id
      );
      // checking if the item exist
      if (index > -1) {
        const existingItem = state.value[index];
        if (existingItem.quantity === 1) {
          // checking if a single item is in the cart
          state.value.splice(index, 1);
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
