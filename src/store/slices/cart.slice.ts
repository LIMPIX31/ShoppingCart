import { Product } from '../models/Product.model'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cartApi } from '../apis/cartApi'

export type CartStateType = {
  products: Product[]
}

export const initialState: CartStateType = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.unshift(action.payload)
    },
    removeProductById: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(v => v.id !== action.payload)
    },
    setQuantityById: (
      state,
      action: PayloadAction<{ id: number; q: number }>
    ) => {
      const index = state.products.findIndex(v => v.id === action.payload.id)
      state.products[index].quantity = Math.max(
        Math.min(action.payload.q, state.products[index].inStock),
        1
      )
    },
  },
  extraReducers: build => {
    build.addMatcher(
      cartApi.endpoints.getProducts.matchFulfilled,
      (state, action) => {
        state.products = action.payload
      }
    )
  },
})

export const { addProduct, removeProductById, setQuantityById } =
  cartSlice.actions

export const cartReducer = cartSlice.reducer
