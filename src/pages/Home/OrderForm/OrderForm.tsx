import { FC } from 'react'
import s from './OrderForm.module.scss'
import { NeuButton } from '../../../components/NeuButton/NeuButton'
import { useAppSelector } from '../../../hooks/storeHooks'
import { NeuBlock } from '../../../components/NeuBlock/NeuBlock'

export const OrderForm: FC = () => {
  const { products } = useAppSelector(state => state.cart)

  const total: number =
    products.length > 0
      ? products.map(v => v.price * (v.quantity || 1)).reduce((l, c) => l + c)
      : 0

  return (
    <NeuBlock>
      <div className={s.title}>Сумма заказа</div>
      <hr />
      <div className={s.totalPrice}>
        <div className={s.summary}>Стоимость: {total}</div>
        <div className={s.summary}>Скидка: 0</div>
        <div className={s.total}>К оплате: {total}</div>
      </div>
      <NeuButton label={'Купить'} className={s.button} />
    </NeuBlock>
  )
}
