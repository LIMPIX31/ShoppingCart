import { FC } from 'react'
import s from './AddToCart.module.scss'
import { Form, Formik } from 'formik'
import { NeuButton } from '../../../components/NeuButton/NeuButton'
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks'
import { addProduct } from '../../../store/slices/cart.slice'
import { NeuBlock } from '../../../components/NeuBlock/NeuBlock'
import { NeuField } from '../../../components/NeuField/NeuField'

export const AddToCart: FC = () => {
  const { products } = useAppSelector(state => state.cart)

  const dispatch = useAppDispatch()

  return (
    <NeuBlock>
      <div className={s.title}>Добавить товар</div>
      <hr />
      <Formik
        initialValues={{
          name: 'Новый товар 1',
          quantity: 1,
          price: 500,
        }}
        onSubmit={({ name, quantity, price }, { setSubmitting }) => {
          setSubmitting(true)
          dispatch(
            addProduct({
              id: products.length,
              price,
              name,
              quantity,
            })
          )
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={s.label}>Наименование товара</div>
            <NeuField className={s.field} type={'text'} name={'name'} />
            <div className={s.label}>Цена</div>
            <NeuField className={s.field} type={'number'} name={'price'} />
            <div className={s.label}>Количество</div>
            <NeuField className={s.field} type={'number'} name={'quantity'} />
            <NeuButton
              label={'Добавить'}
              disabled={isSubmitting}
              className={s.button}
            />
          </Form>
        )}
      </Formik>
    </NeuBlock>
  )
}
