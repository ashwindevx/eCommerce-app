import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart-slice";
import productsReducer from "./features/products-slice";
import categoriesSlice from "./features/categories-slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesSlice,
  },
});
