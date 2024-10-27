import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export let fetch_products = createAsyncThunk("state_products", async () => {
//   let res = await fetch("/db.json");
//   let data = await res.json();
//   return data.products;
// });

// let slice_products = createSlice({
//   initialState: [],
//   name: "state_products",
//   extraReducers: (builder) => {
//     builder.addCase(fetch_products.fulfilled, (state, action) => {
//       console.log(action.payload);
//       state.push(...action.payload);
//     });
//   },
// });

// export default slice_products.reducer;

import db from "../db.json"; // Import your JSON data

// Create an async thunk to fetch products
export let fetch_products = createAsyncThunk(
  "state_products/fetch",
  async () => {
    // If you want to fetch from an API, uncomment this block
    /*
  const res = await fetch("/db.json");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data.products;
  */

    // Directly return products from imported JSON for now
    return db.products;
  }
);

// Create a slice for products
let slice_products = createSlice({
  initialState: [],
  name: "state_products",
  extraReducers: (builder) => {
    builder.addCase(fetch_products.fulfilled, (state, action) => {
      console.log(action.payload); // Log the fetched products
      state.push(...action.payload); // Add fetched products to the state
    });
  },
});

// Export the reducer
export default slice_products.reducer;
