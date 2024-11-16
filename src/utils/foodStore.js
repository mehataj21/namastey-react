import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const foodStore=configureStore({
    reducer: {
        cart: cartReducer,
    }
})
export default foodStore;