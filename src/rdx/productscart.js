import { createSlice } from "@reduxjs/toolkit";

let state_storage = localStorage.getItem("productcart")
  ? JSON.parse(localStorage.getItem("productcart"))
  : [];

let Slice_Cart = createSlice({
  initialState: state_storage,
  name: "productcart",
  reducers: {
    addproduct: (state, action) => {
      let check = state.find((ele) => ele.id === action.payload.id);
      check ? check.quantity++ : state.push(action.payload);

      localStorage.setItem("productcart", JSON.stringify(state));
    },
    deleteproduct: (state, action) => {
      let updatedState = state.filter((ele) => ele.id !== action.payload.id);
      localStorage.setItem("productcart", JSON.stringify(updatedState));
      return updatedState;
    },
    updateproduct: (state, action) => {
      let newstate = state.map((ele) =>
        ele.id === action.payload.id
          ? { ...ele, quantity: action.payload.quantity }
          : ele
      );
      localStorage.setItem("productcart", JSON.stringify(newstate));
      return newstate;
    },
  },
});

export const { addproduct, deleteproduct, updateproduct } = Slice_Cart.actions;
export default Slice_Cart.reducer;
