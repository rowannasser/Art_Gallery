// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export let fetch_products_dashboard = createAsyncThunk(
//   "fetch_products_dashboard",
//   async () => {
//     let res = await fetch("https://0c16affa-b994-482e-9b77-29db20cec35f.mock.pstmn.io/products");
//     let data = await res.json();
//     console.log(data);
//     return data.products;
//   }
// );

// let slice_dashboard = createSlice({
//   initialState: [],
//   name: "slice_dashboard",
//   extraReducers: (builder) => {
//     builder.addCase(fetch_products_dashboard.fulfilled, (state, action) => {
//       console.log(action.payload);
//       state.push(...action.payload);
//     });
//   },
// });

// export default slice_dashboard.reducer;
