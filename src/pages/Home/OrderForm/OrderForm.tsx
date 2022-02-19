import { FC } from 'react'
import s from './OrderForm.module.scss'
import { NeuButton } from '../../../components/NeuButton/NeuButton'

export const OrderForm: FC = () => {
  return <div className={s.orderForm}>
    <div className={s.title}>Сумма заказа</div>
    <hr />
    <div className={s.totalPrice}>
      <div className={s.summary}>Стоимость: 200</div>
      <div className={s.summary}>Скидка: 0</div>
      <div className={s.total}>К оплате: 200</div>
    </div>
    <NeuButton label={'Купить'} />
  </div>
}
