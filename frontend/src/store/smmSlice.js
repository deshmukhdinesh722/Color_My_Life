import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    isLoading:false,
    productList:[]
}

export const addNewSmm = createAsyncThunk(
    "/package/addnewsmm",
    async (formData) => {
        
        console.log(formData);
        
   try {
       const result = await axios.post(
         `${import.meta.env.VITE_API_URL}/api/admin/smm/smm-add`,
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

  export const fetchSmm= createAsyncThunk(
    "/package/fetch",
    async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/smm/smm-fetch`
      );
  console.log(result);
  
      return result?.data;
    }
  );

  export const   deleteSmm = createAsyncThunk(
    "/package/deleteSmm",
    async (id) => {
      const result = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/admin/smm/smm-delete/${id}`
      );
  
      return result?.data;
    }
  );



const AdminSmmSlice = createSlice({
    name: "adminSmmSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(addNewSmm.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addNewSmm.fulfilled, (state, action) => {
            console.log(action?.payload);
            
          state.isLoading = false;
          state.productList = action?.payload?.data;
        })
        .addCase(addNewSmm.rejected, (state, action) => {
          state.isLoading = false;
          state.productList = [];
        })
        .addCase(fetchSmm.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchSmm.fulfilled, (state, action) => {
              console.log(action?.payload);
              
            state.isLoading = false;
            state.productList = action?.payload?.data;
          })
          .addCase(fetchSmm.rejected, (state, action) => {
            state.isLoading = false;
            state.productList = [];
          });
    },
})

export default AdminSmmSlice.reducer;
