import { FC } from 'react'
import s from './AddToCart.module.scss'
import { Form, Formik, Field } from 'formik'
import { NeuButton } from '../../../components/NeuButton/NeuButton'
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks'
import { addProduct } from '../../../store/slices/cart.slice'

export const AddToCart: FC = () => {

  const { products } = useAppSelector(state => state.cart)

  const dispatch = useAppDispatch()

  return <div className={s.addToCart}>
    <div className={s.title}>Добавить товар</div>
    <hr />
    <Formik
    initialValues={{
      name: 'Новый товар 1',
      quantity: 1,
      price: 500
    }}
    onSubmit={({name, quantity, price}, {setSubmitting}) => {
      setSubmitting(true)
      dispatch(addProduct({
        id: products.length,
        price,
        name,
        quantity
      }))
      setSubmitting(false)
    }}
    >
      {({
        submitForm,
        isSubmitting
        }) => (
        <Form>
          <div className={s.label}>Наименование товара</div>
          <Field className={s.input} type={'text'} name={'name'}/>
          <div className={s.label}>Цена</div>
          <Field className={s.input} type={'number'} name={'price'}/>
          <div className={s.label}>Количество</div>
          <Field className={s.input} type={'number'} name={'quantity'}/>
          <NeuButton label={'Добавить'} disabled={isSubmitting}/>
        </Form>
      )}
    </Formik>
  </div>
}
