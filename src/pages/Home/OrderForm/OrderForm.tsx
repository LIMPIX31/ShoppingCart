import { FC } from 'react'
import s from './OrderForm.module.scss'
import { NeuButton } from '../../../components/NeuButton/NeuButton'
import { useAppSelector } from '../../../hooks/storeHooks'

export const OrderForm: FC = () => {

  const { products } = useAppSelector(state => state.cart)

  const total: number = products.length > 0 ? products.map(v => v.price).reduce((l, c) => l + c) : 0

  return <div className={s.orderForm}>
    <div className={s.title}>Сумма заказа</div>
    <hr />
    <div className={s.totalPrice}>
      <div className={s.summary}>Стоимость: {total}</div>
      <div className={s.summary}>Скидка: 0</div>
      <div className={s.total}>К оплате: {total}</div>
    </div>
    <NeuButton label={'Купить'} />
  </div>
}
