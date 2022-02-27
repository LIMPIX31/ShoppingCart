import { addProduct, cartReducer, removeProductById, setQuantityById } from './cart.slice'

const mockProduct = {
  id: 4,
  name: 'test',
  quantity: 1,
  price: 100,
  inStock: 20
}

describe('Cart slice test', () => {
  it('Should add product', () => {
    expect(cartReducer(undefined, addProduct(mockProduct)).products).toEqual([mockProduct])
  })
  it('Should remove product', () => {
    expect(cartReducer({
      products: [mockProduct]
    }, removeProductById(4)).products).toHaveLength(0)
  })
  it('Should increase/decrease quantity', () => {
    expect(cartReducer({
      products: [mockProduct]
    }, setQuantityById({
      id: 4,
      q: 2
    })).products[0].quantity).toBe(2)
  })
})
