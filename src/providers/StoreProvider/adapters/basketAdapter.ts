import { createEntityAdapter } from "@reduxjs/toolkit";
import { ProductType } from "../../../components/ProductList/productTypes";

export const basketAdapter = createEntityAdapter<ProductType>({
    selectId: product => product.id
})