import { EntityState, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { basketAdapter } from "../adapters/basketAdapter";
import { ProductType } from "../../../components/ProductList/productTypes";

interface BasketStateSchema extends EntityState<ProductType> {
    
}

const initialState = basketAdapter.getInitialState<BasketStateSchema>({
    ids: [],
    entities: {}
})

export const basketSlice = createSlice({
    name: "basketSlice",
    initialState,
    reducers: {
        addProductToBasket: (state, action) => {
            basketAdapter.addOne(state, action.payload)
        },
        removeFromBasket: (state, action: PayloadAction<number>) => {
            basketAdapter.removeOne(state, action.payload)
        }
    }
})

export const { reducer: basketReducer } = basketSlice
export const { actions: basketActions } = basketSlice