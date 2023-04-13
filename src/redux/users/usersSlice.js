import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: [],
    isloading: false,
    error: '',
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    axios.get('https://randomuser.me/api/?results=5').then(response => response.data.map((user) => user.name ))
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state)=> {
            state.isloading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isloading = false;
            state.user = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isloading = false;
            state.user = [];
            state.error = action.error.message;
        })

    }
})


export default userSlice.reducer;