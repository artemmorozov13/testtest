import { createReduxStore } from './store'

export interface StateSchema {
    basketReducer: any
}

export type StateSchemaKeys = keyof StateSchema
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']