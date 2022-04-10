import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  loading: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (id) => {
      try {
        const data = await axios
        .get(`listProductBySellerId?seller_id=${id}`)
        .then((response) => response.data)
        .then((result) => result.data.map((item) => ({ key: item.id, ...item })));
        console.log(JSON.stringify(data))
        return data;
      } catch (error) {
        return [];  
      }
  }
);

export const getProductsByKeyword = createAsyncThunk(
    "products/getProductsByKeyword",
    async (keyword) => {
        try {
          const data = await axios
          .get(`searchProductByKeyword?keyword=${keyword}`)
          .then((response) => response.data)
          .then((result) => result.data.map((item) => ({ key: item.id, ...item })));
          return data;
        } catch (error) {
          return [];  
        }
    }
  );

export const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getProductsByKeyword.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsByKeyword.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getProductsByKeyword.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reset } = productReducer.actions;

export const selectProductList = (state) => state.products.list;

export default productReducer.reducer;
