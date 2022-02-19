import { FC } from 'react'
import s from './NeuButton.module.scss'

export type NeuButtonProps = {
  label: string,
  onClick?: () => void
}

export const NeuButton: FC<NeuButtonProps> = ({ label, onClick }) => {
  return <button className={s.button}>
    {label}
  </button>
}
