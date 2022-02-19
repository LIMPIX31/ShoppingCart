import { FC } from 'react'
import s from './Home.module.scss'
import { OrderItem } from './OrderItem/OrderItem'
import { OrderForm } from './OrderForm/OrderForm'
import { AddToCart } from './AddToCart/AddToCart'

export const HomePage: FC = () => {
  return <div className={s.page}>
    <div className={s.wrapper}>
      <div className={s.products}>
        <div className={s.cart}>
          <div>Корзина (4)</div>
          <div>Наименование</div>
          <div>Цена</div>
          <div>Количество</div>
        </div>
        <div className={s.list}>
          <OrderItem productName={'Товар 1'} quantity={1} price={1765} />
          <OrderItem productName={'Товар 2'} quantity={1} price={999} />
        </div>
      </div>
      <div className={s.order}>
        <OrderForm />
        <AddToCart />
      </div>
    </div>
  </div>
}
