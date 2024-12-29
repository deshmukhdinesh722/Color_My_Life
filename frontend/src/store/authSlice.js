import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    isAuthenticated:false,
    isLoading:true,
    user:null
}

export const registerUser = createAsyncThunk('/auth/register',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, formData, {
                withCredentials: true
            });
            console.log(response.data);
            return response.data; // Return response data when successful
        } catch (error) {
            console.error("Registration Error:", error);
            // Use rejectWithValue to return a custom error message
            return rejectWithValue(error.response?.data || "Registration failed");
        }
    }
);

export const loginrUser = createAsyncThunk('/auth/login',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, formData, {
                withCredentials: true
            });
            console.log(response.data);
            return response.data; // Return response data when successful
        } catch (error) {
            console.error("Login Error:", error);
            // Use rejectWithValue to return a custom error message
            return rejectWithValue(error.response?.data || "Login failed");
        }
    }
);

export const logoutUser = createAsyncThunk('/admin/logout',
    async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {}, {
                withCredentials: true
            });
            console.log(response.data);
            return response.data; // Return response data when successful
        } catch (error) {
            console.error("Login Error:", error);
            // Use rejectWithValue to return a custom error message
            return rejectWithValue(error.response?.data || "Login failed");
        }
    }
);
export const checkAuthUser = createAsyncThunk('/auth/checkauth',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/check-auth`, {
                withCredentials: true,
            });
            console.log(response.data);
            return response.data; // Return the user data on success
        } catch (error) {
            console.error("Check Auth Error:", error);
            return rejectWithValue(error.response?.data || "Authentication failed");
        }
    }
);


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
                console.error("Register Rejected:", action.payload); // Log the error message
            })
            .addCase(loginrUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginrUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = !action.payload.success ?null:action.payload.user;
                state.isAuthenticated = !action.payload.success ? false :true;
            })
            .addCase(loginrUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
                console.error("Login Rejected:", action.payload); // Log the error message
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(checkAuthUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user; // Set user data
                state.isAuthenticated = true; // Set authenticated state
            })
            .addCase(checkAuthUser.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false; // Clear authenticated state
            });
            
    }
});


export const {setUser}=authSlice.actions;

export default authSlice.reducer
