import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: null,
    // totalAddOn: 0,
    orderedItems: [],
  },

  reducers: {
    addItems(state, actions) {
      const newItem = actions.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      console.log(existingItem, "existingItem");
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.imageURL,
          price: newItem.price,
          addOns: newItem.addOnsId,
          totalAddon: 0,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItems(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - 1;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    addAddons(state, actions) {
      const id = actions.payload.id;
      const addOnsPrice = actions.payload.updatedPrice;
      const existingItem = state.cartItems.find((item) => item.id === id);
      console.log(existingItem, "existingItem");
      let summation = addOnsPrice?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      console.log(existingItem.totalAddon, summation, "summation");
      existingItem.totalAddon = summation;
    },
    removeWholeItem(state, actions) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== actions.payload
      );
    },
    checkout(state, actions) {
      state.orderedItems.push(actions.payload);
      state.cartItems = [];
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
