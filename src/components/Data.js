import {useGetAllProudctsQuery, useGetProductQuery} from "../features/apiSlice";

export const Data = () => {
    const {data: allProductsData, error, isError, isLoading} = useGetAllProudctsQuery();
    const {data: singleProductData} = useGetProductQuery("iphone");


    console.log(allProductsData);
    console.log(singleProductData);
    if(isLoading){
        return <div>
        <h1>Loading...</h1>
        </div>
    }
        return <div>
        <h1>Data</h1>
        </div>
   
}