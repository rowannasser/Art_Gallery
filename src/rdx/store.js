import { configureStore } from "@reduxjs/toolkit";
import slice_products from "./allproducts";
import Slice_Cart from "./productscart";
// import slice_dashboard from "./dashboard";

let store = configureStore({
  reducer: {
    allproducts: slice_products,
    poroductscart: Slice_Cart,
    // productsdashboard: slice_dashboard,
  },
});

export default store;
