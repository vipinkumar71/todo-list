import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer:{
        //[productsApi.reducerPath] : productApi.reducer,
    },
    // middleware:(getDefaultMiddleware) =>
    //getDefaultMiddleware().concat(productsApi.middleware),
});