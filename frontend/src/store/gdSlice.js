import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    isLoading:false,
    productList:[]
}

export const addNewGd = createAsyncThunk(
    "/gdPackage/addnewGd",
    async (formData) => {
        
        console.log(formData);
        
   try {
       const result = await axios.post(
         `${import.meta.env.VITE_API_URL}/api/admin/gd/gd-add`,
         formData,
         {
           headers: {
             "Content-Type": "application/json",
           },
         }
       );
  console.log(result);
   
       return result?.data;
   } catch (error) {
    console.log(error);
    
   }
    }
  );

  export const fetchGd= createAsyncThunk(
    "/gdPackage/fetch",
    async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/gd/gd-fetch`
      );
  console.log(result);
  
      return result?.data;
    }
  );

  export const   deleteGd = createAsyncThunk(
    "/gdPackage/deleteGd",
    async (id) => {
      const result = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/admin/gd/gd-delete/${id}`
      );
  
      return result?.data;
    }
  );



const AdminGdSlice = createSlice({
    name: "adminSmmSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(addNewGd.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addNewGd.fulfilled, (state, action) => {
            console.log(action?.payload);
            
          state.isLoading = false;
          state.productList = action?.payload?.data;
        })
        .addCase(addNewGd.rejected, (state, action) => {
          state.isLoading = false;
          state.productList = [];
        })
        .addCase(fetchGd.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchGd.fulfilled, (state, action) => {
              console.log(action?.payload);
              
            state.isLoading = false;
            state.productList = action?.payload?.data;
          })
          .addCase(fetchGd.rejected, (state, action) => {
            state.isLoading = false;
            state.productList = [];
          });
    },
})

export default AdminGdSlice.reducer;
