import { FC } from 'react'
import s from './NeuButton.module.scss'

export type NeuButtonProps = {
  label: string,
  onClick?: () => void,
  disabled?: boolean
}

export const NeuButton: FC<NeuButtonProps> = ({ label, onClick, disabled = false }) => {
  return <button className={s.button} disabled={disabled}>
    {label}
  </button>
}
