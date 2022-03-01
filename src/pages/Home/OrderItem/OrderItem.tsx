import { FC } from 'react'
import s from './OrderItem.module.scss'
import cn from 'classnames'

export type OrderItemProps = {
  productName: string
  quantity: number
  price: number
  onQuantityChange?: (value: number) => void
  onDelete?: () => void
}

export const OrderItem: FC<OrderItemProps> = ({
  productName,
  quantity,
  price,
  onQuantityChange = _ => {},
  onDelete = () => {},
}) => {
  return (
    <div className={s.item}>
      <div className={s.deleteandimage}>
        <img
          className={s.delete}
          alt={'delete'}
          src={
            'https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-52-103683.png'
          }
          onClick={onDelete}
        />
        <div className={s.image} />
      </div>
      <div className={s.info}>
        <div className={s.name}>{productName}</div>
      </div>
      <div className={s.price}>{price}</div>
      <div className={s.quantity}>
        <button
          className={s.qbtn}
          onClick={() => onQuantityChange(quantity - 1)}
        >
          <div className={s.minus} />
        </button>
        <div className={s.value}>{quantity}</div>
        <button
          className={s.qbtn}
          onClick={() => onQuantityChange(quantity + 1)}
        >
          <div className={s.minus} />
          <div className={cn(s.minus, s.plus)} />
        </button>
      </div>
    </div>
  )
}
