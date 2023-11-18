import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import cartslice2 from "./cartslice2";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    cart1: cartslice2,
  },
});
export default store;
