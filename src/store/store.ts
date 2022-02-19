import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { cartSlice } from './slices/cart.slice'
import { cartApi } from './apis/cartApi'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [cartApi.reducerPath]: cartApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>
