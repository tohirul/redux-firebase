import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const selectedItem = action.payload;
      // check if selected item exists in cart
      const existingItem = state.itemList.find(
        (item) => item.id === selectedItem.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += selectedItem.price;
      } else {
        state.totalQuantity += 1;

        state.itemList = [
          ...state.itemList,
          {
            id: selectedItem.id,
            price: selectedItem.price,
            quantity: 1,
            totalPrice: selectedItem.price,
            name: selectedItem.name,
          },
        ];
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.itemList.find(
        (item) => item.id === action.payload
      );
      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter(
          (item) => item.id !== action.payload
        );
        state.totalQuantity -= 1;
      } else if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }
    },
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, removeFromCart, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
