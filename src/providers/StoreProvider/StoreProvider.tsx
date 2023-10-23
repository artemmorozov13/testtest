import { FC, ReactNode } from 'react'
import { createReduxStore } from './store'
import { StateSchema } from './types'
import { Provider } from 'react-redux'

interface IStoreProvider {
  children?: ReactNode
  initialState?: StateSchema
};

const StoreProvider: FC<IStoreProvider> = (props) => {
  const {
    children,
    initialState
  } = props

  const store = createReduxStore(initialState)

  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}

export default StoreProvider