import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





const initialState={
    approvalURL:null,
    isLoading:false,
    orderId:null,
    orderList:[],
    orderDetails:null
}


export const createNewOrder= createAsyncThunk('/order/createNewOrder',
    async(orderData)=>{
        const result= await axios.post(
            `${import.meta.env.VITE_API_URL}/api/user-page/order/create`,
            orderData
        )
        console.log(result);
        
        return result?.data
    }
) 
export const capturePayment= createAsyncThunk('/order/capturePayment',
    async({paymentId,payerId,orderId})=>{
        const result= await axios.post(
            `${import.meta.env.VITE_API_URL}/api/user-page/order/capture`,
            {paymentId,payerId,orderId}
        )
        console.log(result);
        
        return result?.data
    }
)

export const getAllOrdersByUser= createAsyncThunk('/order/getAllOrdersByUser',
    async(userId)=>{
        const result= await axios.get(
            `${import.meta.env.VITE_API_URL}/api/user-page/order/list/${userId}`,
        )
        
        
        return result?.data
    }
)
export const getOrderDetails= createAsyncThunk('/order/getOrderDetails',
    async(id)=>{
        const result= await axios.get(
            `${import.meta.env.VITE_API_URL}/api/user-page/order/details/${id}`,
        )
        
        
        return result?.data
    }
)

const OrderSlice=createSlice({
    name:'orderSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createNewOrder.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createNewOrder.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.approvalURL=action.payload.approvalURL,
            state.orderId=action.payload.orderId,
            sessionStorage.setItem(`currentOrderId`,JSON.stringify(action.payload.orderId))
        })
        .addCase(createNewOrder.rejected,(state,action)=>{
            state.isLoading=false,
            state.approvalURL=null,
            state.orderId=null
        })
        .addCase(getAllOrdersByUser.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getAllOrdersByUser.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.orderList=action.payload.data
        })
        .addCase(getAllOrdersByUser.rejected,(state,action)=>{
            state.isLoading=false,
            state.orderList=[]
        })
        .addCase(getOrderDetails.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getOrderDetails.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.orderDetails=action.payload.data
        })
        .addCase(getOrderDetails.rejected,(state,action)=>{
            state.isLoading=false,
            state.orderDetails=null
        })
    }
})


export default OrderSlice.reducer;