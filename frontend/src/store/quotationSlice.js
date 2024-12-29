import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    isLoading:false,
    quotationList:[]
}

export const addQuotation= createAsyncThunk('/quotation/addQuotation',
    async(formData)=>{
        
        const result=await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/quotation/addQ`,
                formData
        ,)
        return result.data
    }
)

export const fetchQuotation= createAsyncThunk('/quptation/fetchQuotation',
    async({userId})=>{
        const result=await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/quotation/getQ/${userId}`
            
        )
        return result.data
    }
)
export const fetchAllQuotationAdmin= createAsyncThunk('/quptation/fetchAllQuotationAdmin',
    async()=>{
        const result=await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/quotation/getAllQ`
            
        )
        return result.data
    }
)

export const deleteQuotation= createAsyncThunk('/quotation/deleteQuotation',
    async({quotationId})=>{
        const result=await axios.delete(
            `${import.meta.env.VITE_API_URL}/api/admin/quotation/deleteQ/${quotationId}`           
        )
        return result.data
    }
)

const QuotationSlice=createSlice({
    name:'quotationSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addQuotation.pending,(state,action)=>{
            state.isLoading= true
        })
        .addCase(addQuotation.fulfilled,(state,action)=>{
            console.log(action.payload);
            

            state.isLoading= false
            state.quotationList=action.payload.data
        })
        .addCase(addQuotation.rejected,(state,action)=>{
            state.isLoading= false
            state.quotationList=[]
        })
        .addCase(fetchQuotation.pending,(state,action)=>{
            state.isLoading= true
        })
        .addCase(fetchQuotation.fulfilled,(state,action)=>{
            state.isLoading= false
            state.quotationList=action.payload.data
        })
        .addCase(fetchQuotation.rejected,(state,action)=>{
            state.isLoading= false
            state.quotationList=[]
        })
        .addCase(fetchAllQuotationAdmin.pending,(state,action)=>{
            state.isLoading= true
        })
        .addCase(fetchAllQuotationAdmin.fulfilled,(state,action)=>{
            state.isLoading= false
            state.quotationList=action.payload.data
        })
        .addCase(fetchAllQuotationAdmin.rejected,(state,action)=>{
            state.isLoading= false
            state.quotationList=[]
        })
    }
})

export default QuotationSlice.reducer;
