import * as hooks from '../../../hooks/storeHooks'
import { Product } from '../../../store/models/Product.model'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { AddToCart } from './AddToCart'

describe('AddToCart test', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useAppSelector').mockImplementation(() => ({
      products: [{
        id: 2,
        quantity: 1,
        price: 500,
        name: 'Тестовый товар',
        inStock: Infinity
      } as Product, {
        id: 3,
        quantity: 2,
        price: 1200,
        name: 'Тестовый товар 2',
        inStock: Infinity
      } as Product]
    }))
  })

  const mockDispatch = () => {
    const mdf = jest.fn()
    jest.spyOn(hooks, 'useAppDispatch').mockImplementation(() => mdf)
    return mdf
  }

  it('Should prepend item', async () => {
    const dispatchMock = mockDispatch()
    render(<AddToCart />)
    await act(async () => {
      fireEvent.click(await screen.getByRole('button'))
    })
    expect(dispatchMock).toBeCalled()
    expect(dispatchMock).toBeCalledWith({
      payload: {
        id: 2,
        inStock: 1000,
        name: 'Новый товар 1',
        price: 500,
        quantity: 1
      },
      type: 'cart/addProduct'
    })
  })
})
