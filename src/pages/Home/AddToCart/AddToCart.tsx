import { FC } from 'react'
import s from './AddToCart.module.scss'
import { Form, Formik, Field } from 'formik'
import { NeuButton } from '../../../components/NeuButton/NeuButton'

export const AddToCart: FC = () => {
  return <div className={s.addToCart}>
    <div className={s.title}>Добавить товар</div>
    <hr />
    <Formik
    initialValues={{
      name: 'Новый товар 1',
      quantity: 1,
      price: '500'
    }}
    onSubmit={() => {

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
          <NeuButton label={'Добавить'}/>
        </Form>
      )}
    </Formik>
  </div>
}
