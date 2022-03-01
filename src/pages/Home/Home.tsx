import { FC } from 'react'
import s from './Home.module.scss'
import { OrderItem } from './OrderItem/OrderItem'
import { OrderForm } from './OrderForm/OrderForm'
import { AddToCart } from './AddToCart/AddToCart'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { useGetProductsQuery } from '../../store/apis/cartApi'
import {
  removeProductById,
  setQuantityById,
} from '../../store/slices/cart.slice'

export const HomePage: FC = () => {
  const { products } = useAppSelector(state => state.cart)
  useGetProductsQuery()

  const dispatch = useAppDispatch()

  return (
    <div className={s.page}>
      <div className={s.wrapper}>
        <div className={s.products}>
          <div className={s.cart}>
            <div>Корзина ({products.length})</div>
            <div>Наименование</div>
            <div>Цена</div>
            <div>Количество</div>
          </div>
          <div className={s.list} data-testid={'list'}>
            {products.map((v, i) => (
              <OrderItem
                productName={v.name}
                quantity={v.quantity || 1}
                price={v.price}
                key={i}
                onQuantityChange={value => {
                  dispatch(
                    setQuantityById({
                      id: v.id,
                      q: value,
                    })
                  )
                }}
                onDelete={() => {
                  dispatch(removeProductById(v.id))
                }}
              />
            ))}
          </div>
        </div>
        <div className={s.order}>
          <OrderForm />
          <AddToCart />
        </div>
      </div>
    </div>
  )
}
