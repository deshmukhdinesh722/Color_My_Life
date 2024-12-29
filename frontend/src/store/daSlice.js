import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    isLoading:false,
    productList:[]
}

export const addNewDa = createAsyncThunk(
    "/daPackage/addnewDa",
    async (formData) => {
        
        console.log(formData);
        
   try {
       const result = await axios.post(
         `${import.meta.env.VITE_API_URL}/api/admin/da/da-ad`,
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

  export const fetchDa= createAsyncThunk(
    "/daPackage/fetch",
    async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/da/da-fetch`
      );
  console.log(result);
  
      return result?.data;
    }
  );

  export const   deleteDa = createAsyncThunk(
    "/daPackage/deleteDa",
    async (id) => {
      const result = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/admin/da/da-delete/${id}`
      );
  
      return result?.data;
    }
  );



const AdminDaSlice = createSlice({
    name: "adminDaSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(addNewDa.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addNewDa.fulfilled, (state, action) => {
            console.log(action?.payload);
            
          state.isLoading = false;
          state.productList = action?.payload?.data;
        })
        .addCase(addNewDa.rejected, (state, action) => {
          state.isLoading = false;
          state.productList = [];
        })
        .addCase(fetchDa.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchDa.fulfilled, (state, action) => {
              console.log(action?.payload);
              
            state.isLoading = false;
            state.productList = action?.payload?.data;
          })
          .addCase(fetchDa.rejected, (state, action) => {
            state.isLoading = false;
            state.productList = [];
          });
    },
})

export default AdminDaSlice.reducer;
