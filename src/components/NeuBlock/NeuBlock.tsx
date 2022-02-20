import { FC } from 'react'
import s from './NeuBlock.module.scss'
import cn from 'classnames'

export type NeuBlockProps = {
  className?: string
}

export const NeuBlock: FC<NeuBlockProps> = ({ children, className }) => {
  return <div className={cn(s.block, className)}>{children}</div>
}
