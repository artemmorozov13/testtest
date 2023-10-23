import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './types'
import { api } from '../../lib/axiosInstance'
import { basketReducer } from './slices/basketSlice'

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    basketReducer: basketReducer
  }

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: api
        }
      }
    })
  })

  return store
}