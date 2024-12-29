import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    isLoading:false,
    productList:[]
}

export const addNewProduct = createAsyncThunk(
    "/products/addnewproduct",
    async (formData) => {
      console.log(formData);
      
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/product/add`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      return result?.data;
    }
  );
  
  export const fetchProduct = createAsyncThunk(
    "/products/fetchProduct",
    async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/product/fetch`
      );
  console.log(result);
  
      return result?.data;
    }
  );


// editProduct
export const editProduct=createAsyncThunk('/products/editProduct', async({id,formData})=>{
    const result=await axios.put(`${import.meta.env.VITE_API_URL}/api/admin/product/edit/${id}`,formData,{
        headers:{
            'Content-Type':'application/json'
        }
    })
    return result?.data;
})
export const deleteProduct = createAsyncThunk(
    "/products/deleteProduct",
    async (id) => {
      const result = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/admin/product/delete/${id}`
      );
  
      return result?.data;
    }
  );


const AdminProductSlice = createSlice({
    name: "adminProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProduct.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
          state.isLoading = false;
          state.productList = action.payload.data;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
          state.isLoading = false;
          state.productList = [];
        });
    },
})

export default AdminProductSlice.reducer;
