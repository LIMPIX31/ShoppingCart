import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../models/Product.model'

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: build => ({
    getProducts: build.query<Product[], void>({
      query: () => `db.json`,
    }),
  }),
})

export const { useGetProductsQuery } = cartApi
