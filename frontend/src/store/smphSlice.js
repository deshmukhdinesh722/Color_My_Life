import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    isLoading:false,
    productList:[]
}

export const addNewSmph = createAsyncThunk(
    "/smphPackage/addnewsmph",
    async (formData) => {
        
        console.log(formData);
        
   try {
       const result = await axios.post(
         `${import.meta.env.VITE_API_URL}/api/admin/smph/smph-add`,
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

  export const fetchSmph= createAsyncThunk(
    "/smphPackage/fetch",
    async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/smph/smph-fetch`
      );
  console.log(result);
  
      return result?.data;
    }
  );

  export const   deleteSmph = createAsyncThunk(
    "/smphPackage/deleteSmph",
    async (id) => {
      const result = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/admin/smph/smph-delete/${id}`
      );
  
      return result?.data;
    }
  );



const AdminSmphSlice = createSlice({
    name: "adminSmphSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(addNewSmph.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addNewSmph.fulfilled, (state, action) => {
            console.log(action?.payload);
            
          state.isLoading = false;
          state.productList = action?.payload?.data;
        })
        .addCase(addNewSmph.rejected, (state, action) => {
          state.isLoading = false;
          state.productList = [];
        })
        .addCase(fetchSmph.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchSmph.fulfilled, (state, action) => {
              console.log(action?.payload);
              
            state.isLoading = false;
            state.productList = action?.payload?.data;
          })
          .addCase(fetchSmph.rejected, (state, action) => {
            state.isLoading = false;
            state.productList = [];
          });
    },
})

export default AdminSmphSlice.reducer;
