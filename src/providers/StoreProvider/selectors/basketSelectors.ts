import { basketAdapter } from "../adapters/basketAdapter";
import { StateSchema } from "../types";

export const getBasketProducts = basketAdapter.getSelectors<StateSchema>(
    state => state.basketReducer || basketAdapter.getInitialState()
)