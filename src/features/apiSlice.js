import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),
    endpoints:(builder)=>({
        getAllProudcts:  builder.query({
            query:() =>  "products",
        }),
        getProduct: builder.query({
            query:(product) =>`products/search?q=${product}`,
        })
    }),
});

export const {useGetAllProudctsQuery, useGetProductQuery} = productsApi