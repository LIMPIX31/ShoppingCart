import { FC } from 'react'
import s from './NeuField.module.scss'
import { Field } from 'formik'
import cn from 'classnames'

export type NeuFieldProps = {
  className?: string
  name: string
  type: string
}

export const NeuField: FC<NeuFieldProps> = ({ className, name, type }) => {
  return <Field className={cn(s.input, className)} type={type} name={name} />
}
