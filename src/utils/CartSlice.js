import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem1: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, increment the quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If the item doesn't exist, add it with a quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem1: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If the item exists, decrement the quantity
        if (state.items[existingItemIndex].quantity > 1) {
          state.items[existingItemIndex].quantity -= 1;
        } else {
          // If the quantity is 1, remove the item from the cart
          state.items.splice(existingItemIndex, 1);
        }
      }
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
    
  },
});
export const { addItem, removeItem, clearCart, removeItem1,addItem1 } =
  CartSlice.actions;
export default CartSlice.reducer;
