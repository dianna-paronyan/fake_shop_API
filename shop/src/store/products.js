import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../features";
import { productReducer } from "../features/productsSlice";

export const store = configureStore({
    reducer:{
        products: productsReducer,
        product: productReducer,
    }
})