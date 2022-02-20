import { FC } from 'react'
import s from './NeuButton.module.scss'
import cn from 'classnames'

export type NeuButtonProps = {
  label: string
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export const NeuButton: FC<NeuButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <button className={cn(s.button, className)} disabled={disabled}>
      {label}
    </button>
  )
}
