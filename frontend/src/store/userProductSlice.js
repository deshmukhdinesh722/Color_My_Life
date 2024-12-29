import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productsList: [],
  productDetails:null
};

export const fetchUserFilterProduct = createAsyncThunk(
  "/products/fetchProduct",
  async ({filterParams,sortParams}) => {
  
    const query=new URLSearchParams({
      ...filterParams,
      sortBy:sortParams
    })
    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/user-page/product/get?${query}`
    );
    console.log(result); // Debugging Axios response
    return result?.data; // Ensure 'data' contains the expected structure
    
  }
);

export const fetchAllProductsHome= createAsyncThunk(
  '/home/fetchAllProductsHome',
  async()=>{
    const result= await axios.get(
      `${import.meta.env.VITE_API_URL}/api/user-page/product/getHomeProducts`
    )
  }
)

export const fetchProductDetailsHome= createAsyncThunk(
  "/products/fetchProductDetailsHpme",
  async (id) => {
  console.log(id);
  
    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/user-page/product/getProductDetailHome/${id}`
    );
    console.log(result); // Debugging Axios response
    return result?.data; // Ensure 'data' contains the expected structure
    
  }
);
export const fetchProductDetails= createAsyncThunk(
  "/products/fetchProductDetails",
  async (id) => {
  
    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/user-page/product/get/${id}`
    );
    console.log(result); // Debugging Axios response
    return result?.data; // Ensure 'data' contains the expected structure
    
  }
);

const UserProductSlice = createSlice({
  name: "userProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserFilterProduct.pending, (state) => {
        state.isLoading = true; // Correctly handle pending state
      })
      .addCase(fetchUserFilterProduct.rejected, (state) => {
        state.isLoading = false;
        state.productsList = [];
      })
      .addCase(fetchUserFilterProduct.fulfilled, (state, action) => {
        console.log(action.payload); // Log payload to debug
        state.isLoading = false;
        state.productsList = action.payload?.data || []; // Safely handle payload data
      })
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true; // Correctly handle pending state
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        state.isLoading = false;
        state.productDetails = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        console.log(action.payload); // Log payload to debug
        state.isLoading = false;
        state.productDetails = action.payload?.data || null; // Safely handle payload data
      })
      .addCase(fetchAllProductsHome.pending, (state) => {
        state.isLoading = true; // Correctly handle pending state
      })
      .addCase(fetchAllProductsHome.rejected, (state) => {
        state.isLoading = false;
        state.productDetails = null;
      })
      .addCase(fetchAllProductsHome.fulfilled, (state, action) => {
        console.log(action.payload); // Log payload to debug
        state.isLoading = false;
        state.productDetails = action.payload?.data || null; // Safely handle payload data
      })
      .addCase(fetchProductDetailsHome.pending, (state) => {
        state.isLoading = true; // Correctly handle pending state
      })
      .addCase(fetchProductDetailsHome.rejected, (state) => {
        state.isLoading = false;
        state.productDetails = null;
      })
      .addCase(fetchProductDetailsHome.fulfilled, (state, action) => {
        console.log(action.payload); // Log payload to debug
        state.isLoading = false;
        state.productDetails = action.payload?.data || null; // Safely handle payload data
      });
  },
});

export default UserProductSlice.reducer;
