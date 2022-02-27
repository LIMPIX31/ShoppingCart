import { OrderForm } from './OrderForm'
import { Product } from '../../../store/models/Product.model'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import * as hooks from '../../../hooks/storeHooks'

describe('OrderForm component test', () => {

  const mock = (q: number = 1, price: number = 999, ...items: Product[]) => {
    jest.spyOn(hooks, 'useAppSelector').mockImplementation(() => ({
      products: [{
        id: 2,
        quantity: q,
        price: price,
        name: 'Тестовый товар',
        inStock: Infinity
      } as Product, ...items]
    }))
  }

  it('Should work with single item and 1 quantity', async () => {
    mock()
    render(<OrderForm />)
    expect(await screen.queryByText('Стоимость: 999')).toBeInTheDocument()
    expect(await screen.queryByText('К оплате: 999')).toBeInTheDocument()
  })

  it('Should work with single item and 2 quantity', async () => {
    mock(2)
    render(<OrderForm />)
    expect(await screen.queryByText('Стоимость: 1998')).toBeInTheDocument()
    expect(await screen.queryByText('К оплате: 1998')).toBeInTheDocument()
  })

  it('Should work with multiple items', async () => {
    mock(2, 2000, {
      name: '',
      quantity: 5,
      price: 1000,
      id: 4,
      inStock: Infinity
    }, {
      name: '',
      quantity: 3,
      price: 500,
      id: 5,
      inStock: Infinity
    })
    render(<OrderForm />)
    expect(await screen.queryByText('Стоимость: 10500')).toBeInTheDocument()
    expect(await screen.queryByText('К оплате: 10500')).toBeInTheDocument()
  })

})
