// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem1: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem1: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const { id, change } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Update quantity based on the provided change (positive or negative)
        existingItem.quantity += change;

        // Ensure the quantity doesn't go below 1
        existingItem.quantity = Math.max(existingItem.quantity, 1);
      }
    },
    clearCart1: (state) => {
      state.items = [];
    },
  },
});

export const { addItem1, removeItem1, updateQuantity, clearCart1 } =
  cartSlice.actions;
export default cartSlice.reducer;
