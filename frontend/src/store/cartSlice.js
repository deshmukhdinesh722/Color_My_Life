import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState={
    cartItems:[],
    userList:[],
    orderList:null,
    isLoading:false
}

export const addToCart=createAsyncThunk('cart/addToCart',
    async({userId,userName,productId,quantity})=>{
   
    
        
        const response=await axios.post(
            `${import.meta.env.VITE_API_URL}/api/user-page/cart/addCart`,
            {userId,userName,productId,quantity}
        )
        console.log(response);
        
        return response?.data
    }
)
export const addToCartA=createAsyncThunk('cart/addToCartA',
    async({userId,userName,productId,quantity})=>{
    
        
        const response=await axios.post(
            `${import.meta.env.VITE_API_URL}/api/user-page/cart/addCartA`,
            {userId,userName,productId,quantity}
        )
        return response?.data
    }
)

export const fetchCart=createAsyncThunk('cart/fetchCart',
    async({userId,userName})=>{
       console.log(userName);
       
        const response=await axios.get(
            `${import.meta.env.VITE_API_URL}/api/user-page/cart/get/${userId}/${userName}`
           
        )
        console.log(response);
        return response?.data
        
    }
)
export const fetchAllCartsAdmin=createAsyncThunk('adminOrder/fetchAllCartsAdmin',
    async()=>{
        const result=await axios.get(
            `${import.meta.env.VITE_API_URL}/api/admin/adminOrder/get`
            
        )
        console.log(result);
        
        return result?.data
    }
)
export const fetchAllUsersAdmin=createAsyncThunk('adminOrder/fetchAllUsersAdmin',
    async()=>{
        const result=await axios.get(
            `${import.meta.env.VITE_API_URL}/api/admin/adminOrder/getUsers`
            
        )
        console.log(result);
        
        return result?.data
    }
)

export const updateCart=createAsyncThunk('cart/updateCart',
    async({userId,userName,productId,quantity})=>{
        const response=await axios.put(
            `${import.meta.env.VITE_API_URL}/api/user-page/cart/updateCart`,
            {userId,userName,productId,quantity}
        )
        return response?.data
    }
)

export const deleteCart=createAsyncThunk('cart/deleteCart',
    async({userId,productId,userName})=>{
        const response=await axios.delete(
            `${import.meta.env.VITE_API_URL}/api/user-page/cart/${userId}/${productId}/${userName}`
        )
        return response?.data
    }
)

export const orderDetailsAdmin=createAsyncThunk('adminOrder/orderDetails',
    async({userId,userName})=>{
        const result=
        await axios.get(`${import.meta.env.VITE_API_URL}/api/admin/adminOrder/getOne/${userId}/${userName}`)
        return result?.data
    } 
   
)
export const deleteUserFromCart=createAsyncThunk('adminOrder/deleteUserFromCart',
    async({id})=>{
        console.log(id);
        
        const result=
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/adminOrder/deleteUserFromCart/${id}`

        ) 
         return result?.data
    }
  
)
const UserCartSlice=createSlice({
    name:'userCart',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addToCart.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
            console.log(action.payload);
            
            state.isLoading=false;
            state.cartItems=action.payload.data
        }) 
        .addCase(addToCart.rejected,(state)=>{
            state.isLoading=false;
            state.cartItems=[]
        })
        .addCase(fetchCart.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(fetchCart.fulfilled,(state,action)=>{
            console.log(action.payload.data.items);
            
            state.isLoading=false;
            state.cartItems=action.payload.data
        }) 
        .addCase(fetchCart.rejected,(state)=>{
            state.isLoading=false;
            state.cartItems=[]
        })
        .addCase(updateCart.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(updateCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.cartItems=action.payload.data
        }) 
        .addCase(updateCart.rejected,(state)=>{
            state.isLoading=false;
            state.cartItems=[]
        })
        .addCase(deleteCart.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(deleteCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.cartItems=action.payload.data
        }) 
        .addCase(deleteCart.rejected,(state)=>{
            state.isLoading=false;
            state.cartItems=[]
        })
        .addCase(fetchAllCartsAdmin.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(fetchAllCartsAdmin.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.cartItems=action.payload.data
        }) 
        .addCase(fetchAllCartsAdmin.rejected,(state)=>{
            state.isLoading=false;
            state.cartItems=[]
        })
        .addCase(fetchAllUsersAdmin.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(fetchAllUsersAdmin.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.userList=action.payload.data
        }) 
        .addCase(fetchAllUsersAdmin.rejected,(state)=>{
            state.isLoading=false;
            state.userList=[]
        })
        .addCase(orderDetailsAdmin.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(orderDetailsAdmin.fulfilled,(state,action)=>{
           
            
            state.isLoading=false;
            state.orderList=action.payload.data
console.log(state.orderList);   
        }) 
        .addCase(orderDetailsAdmin.rejected,(state)=>{
            state.isLoading=false;
            state.orderList=null
        })
        .addCase(deleteUserFromCart.pending,(state,)=>{
            state.isLoading=true;
        })
        .addCase(deleteUserFromCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.cartItems=action.payload.data
            console.log(state.cartItems);
            
        })
        .addCase(deleteUserFromCart.rejected,(state,action)=>{
            state.isLoading=false;
            console.log("Hallo");
            
        })
    }
})

export default UserCartSlice.reducer;