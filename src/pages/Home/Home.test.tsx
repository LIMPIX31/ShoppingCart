import { act, fireEvent, render, screen } from '@testing-library/react'
import { HomePage } from './Home'
import * as hooks from '../../hooks/storeHooks'
import { Product } from '../../store/models/Product.model'
import * as api from '../../store/apis/cartApi'

describe('HomePage Test', () => {

  beforeEach(() => {
    jest.spyOn(api, 'useGetProductsQuery').mockImplementation()
    jest.spyOn(hooks, 'useAppSelector').mockImplementation(() => ({
      products: [{
        id: 2,
        quantity: 1,
        price: 500,
        name: 'Тестовый товар 1',
        inStock: Infinity
      }, {
        id: 3,
        quantity: 2,
        price: 1000,
        name: 'Тестовый товар 2',
        inStock: Infinity
      }] as Product[]
    }))
  })

  const mockDispatch = () => {
    const mdf = jest.fn()
    jest.spyOn(hooks, 'useAppDispatch').mockImplementation(() => mdf)
    return mdf
  }

  it('Should display right cart products count', async () => {
    mockDispatch()
    render(<HomePage />)
    expect(await screen.queryByText('Корзина (2)')).toBeInTheDocument()
  })

  it('Should display right count of product items', async () => {
    mockDispatch()
    render(<HomePage />)
    const itemsBlock = await screen.findByTestId('list')
    expect(itemsBlock.children.length).toBe(2)
  })

  it('Should delete', async () => {
    const dispatchMock = mockDispatch()
    render(<HomePage />)
    const deleteButton = (await screen.findAllByAltText('delete'))[0]
    await act(async () => {
      fireEvent.click(deleteButton)
    })
    expect(dispatchMock).toBeCalled()
    expect(dispatchMock).toBeCalledWith({
      payload: 2,
      type: "cart/removeProductById"
    })
  })

})
