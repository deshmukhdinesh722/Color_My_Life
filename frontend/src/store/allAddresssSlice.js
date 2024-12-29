import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    isLoading:false,
    address:null
}

export const allUserAddress=createAsyncThunk('/admin/userAddress',
   async({userId})=>{
    
    
    const result= await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/allAddress/getAllAddress/${userId}`
    )
//    console.log(result);
   
    return result?.data
   } 
)


const AllAddressSlice=createSlice(
{
    name:'allAddressSlice',
initialState,
reducers:{},
extraReducers:(builder)=>{
builder
.addCase(allUserAddress.pending,(state)=>{
    state.isLoading=true
})
.addCase(allUserAddress.fulfilled,(state,action)=>{
    state.isLoading=false,
    state.address=action?.payload?.data
})
.addCase(allUserAddress.rejected,(state)=>{
    state.isLoading=false,
    state.address=null
})
}
}
)

export default AllAddressSlice.reducer