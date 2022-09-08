import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalData: {},
    show: false,
  },
  reducers: {
    openModal(state, actions) {
      state.modalData = actions.payload;
    },
    showModal(state) {
      state.show = true;
    },
    hideModal(state) {
      state.show = false;
    },
  },
});
export const modalActions = modalSlice.actions;
export default modalSlice;
