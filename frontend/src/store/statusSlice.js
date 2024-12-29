import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState={
isLoading:false,
status:''

}

export const addStatus=createAsyncThunk('/status/addStatus',
    async({userId,status})=>{
        console.log(userId);
        
        const result=await axios.post(
            `${import.meta.env.VITE_API_URL}/api/admin/status/addStatus/${userId}`,
            {status}
        )
        return result?.data
    }
)

export const fetchStatus=createAsyncThunk('/status/fetchStatus',
    async({userId})=>{
        console.log(userId);
        
        const result=await axios.get(
            `${import.meta.env.VITE_API_URL}/api/admin/status/getStatus/${userId}`
        )
       
        
        return result?.data ;
    }
)

export const editStatus=createAsyncThunk('/status/editStatus',
    async({userId,status})=>{
        console.log(userId);
        
        const result=await axios.put(
            `${import.meta.env.VITE_API_URL}/api/admin/status/editStatus/${userId}`,
            {status}
        )
       
        
        return result?.data ;
    }
)
export const deleteStatus= createAsyncThunk('/status/deleteStatus',
    async({id})=>{
        const result= await axios.delete(
            `${import.meta.env.VITE_API_URL}/api/admin/status/deleteStatus/${id}`
        )
        return result?.data;
    }
)

const StatusSlice=createSlice({
    name:'statusSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        builder
        .addCase(addStatus.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(addStatus.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.status=action.payload.data

        })
        .addCase(addStatus.rejected,(state,action)=>{
            state.isLoading=false,
            state.status=''

        })
        .addCase(fetchStatus.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(fetchStatus.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.status=action.payload.data
console.log(state.status);

        })
        .addCase(fetchStatus.rejected,(state,action)=>{
            state.isLoading=false,
            state.status=''

        })
        .addCase(editStatus.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(editStatus.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.status=action.payload.data
console.log(state.status);

        })
        .addCase(editStatus.rejected,(state,action)=>{
            state.isLoading=false,
            state.status=''

        })
        .addCase(deleteStatus.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(deleteStatus.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.status=action.payload.data

        })
        .addCase(deleteStatus.rejected,(state,action)=>{
            state.isLoading=false,
            state.status=''

        })
    }
})

export default StatusSlice.reducer;
