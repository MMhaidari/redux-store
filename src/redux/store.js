import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/usersSlice';


const Store = configureStore({
    reducer: {
        users: userReducer,
    }
})

export default Store;
