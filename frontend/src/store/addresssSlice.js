import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    isLoading:false,
    addressList:[]
}

export const addAddress= createAsyncThunk('/address/addAddress',
    async(formData)=>{
        
        const result=await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user-page/address/addAddress`,
                formData
        ,)
        return result.data
    }
)

export const fetchAddress= createAsyncThunk('/address/fetchAddress',
    async(userId)=>{
        const result=await axios.get(
        `${import.meta.env.VITE_API_URL}/api/user-page/address/getAddresss/${userId}`
            
        )
        return result.data
    }
)

export const editAddress= createAsyncThunk('/address/editAddress',
    async({userId,addressId,formData})=>{
        console.log(addressId);
        
        const result=await axios.put(
        `${import.meta.env.VITE_API_URL}/api/user-page/address/updateAddress/${userId}/${addressId}`
            , formData
        )
        return result.data
    }
)

export const deleteAddress= createAsyncThunk('/address/deleteAddress',
    async({userId,addressId})=>{
        const result=await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/user-page/address/deleteAddress/${userId}/${addressId}`
           
        )
        return result.data
    }
)

const AddressSlice=createSlice({
    name:'addressSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addAddress.pending,(state,action)=>{
            state.isLoading= true
        })
        .addCase(addAddress.fulfilled,(state,action)=>{
            console.log(action.payload);
            

            state.isLoading= false
            state.addressList=action.payload.data
        })
        .addCase(addAddress.rejected,(state,action)=>{
            state.isLoading= false
            state.addressList=[]
        })
        .addCase(fetchAddress.pending,(state,action)=>{
            state.isLoading= true
        })
        .addCase(fetchAddress.fulfilled,(state,action)=>{
            state.isLoading= false
            state.addressList=action.payload.data
        })
        .addCase(fetchAddress.rejected,(state,action)=>{
            state.isLoading= false
            state.addressList=[]
        })
        .addCase(editAddress.pending,(state,action)=>{
            state.isLoading= true
        })
        .addCase(editAddress.fulfilled,(state,action)=>{
            state.isLoading= false
            state.addressList=action.payload.data
        })
        .addCase(editAddress.rejected,(state,action)=>{
            state.isLoading= false
            state.addressList=[]
        })
    }
})

export default AddressSlice.reducer;
