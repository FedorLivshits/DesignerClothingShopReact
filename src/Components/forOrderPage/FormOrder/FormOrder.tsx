import React from 'react'
import {MainTitle} from '../../../Pages/CartPage/CartPageStyle'
import {Select} from '../../../Pages/ProductPage/ProductPageStyle'
import {countries} from '../../../assets/arrayOfCountries/countriesArray'
import {useFormik} from 'formik'
import * as yup from 'yup'
import {CheckboxWrapper, ErrorMessage, Form, Input, InputWrapper, Label, OrderBtn, TextLabel} from './FormOrderStyle'

const FormOrder = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            country: '',
            city: '',
            address: '',
            postCode: '',
            acceptedTerms: '',
        },
        onSubmit: (values, {setSubmitting, resetForm}) => {
            setTimeout(() => {
                alert(`Спасибо, ${values.name}! Мы приняли ваш заказ ;)`)
                resetForm()
                setSubmitting(false)
            }, 1000)
        },
        validationSchema: yup.object({
            name: yup.string().required('Пожалуйста, введите свое имя'),
            surname: yup.string().required('Пожалуйста, введите фамилию'),
            email: yup.string().email('Неверный email адрес').required('Пожалуйста, введите email'),
            country: yup.string().required('Выберете страну'),
            city: yup.string().required('Пожалуйста, введите город'),
            address: yup.string().required('Пожалуйста, введите адрес доставки'),
            postCode: yup.string().required('Пожалуйста, введите ваш почтовый индекс'),
            acceptedTerms: yup.boolean().oneOf([true], 'Пожалуйста, подтвердите согласие на обработку').required('Подтвердите согласие на обработку'),
        })
    })
    const nameValidation = formik.touched.name && formik.errors.name
    const surnameValidation = formik.touched.surname && formik.errors.surname
    const emailValidation = formik.touched.email && formik.errors.email
    const countryValidation = formik.touched.country && formik.errors.country
    const cityValidation = formik.touched.city && formik.errors.city
    const addressValidation = formik.touched.address && formik.errors.address
    const postCodeValidation = formik.touched.postCode && formik.errors.postCode
    const acceptedTermsValidation = formik.touched.acceptedTerms && formik.errors.acceptedTerms
    return (
        <Form onSubmit={formik.handleSubmit}>
            <MainTitle>
                ЗАПОЛНИТЕ ФОРМУ
            </MainTitle>
            <InputWrapper>
                {nameValidation && (
                    <ErrorMessage>{formik.errors.name}</ErrorMessage>
                )}
                <Input name='name' placeholder='Имя'
                       value={formik.values.name}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}/>

                {surnameValidation && (
                    <ErrorMessage>{formik.errors.surname}</ErrorMessage>
                )}
                <Input name='surname' placeholder='Фамилия'
                       value={formik.values.surname}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}/>

                {emailValidation && (
                    <ErrorMessage>{formik.errors.email}</ErrorMessage>
                )}
                <Input name='email'
                       placeholder='Email'
                       value={formik.values.email}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}/>

            </InputWrapper>
            <InputWrapper>
                {countryValidation && (
                    <ErrorMessage>{formik.errors.country}</ErrorMessage>
                )}
                <Select name='country'
                        id='country'
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>
                    <option value=''>Выберете страну доставки</option>
                    {countries.map((c, i) => {
                        return <option key={i} value={c}>
                            {c}
                        </option>
                    })}
                </Select>
                {cityValidation && (
                    <ErrorMessage>{formik.errors.city}</ErrorMessage>
                )}
                <Input name='city' placeholder='Город'
                       value={formik.values.city}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}/>

                {addressValidation && (
                    <ErrorMessage>{formik.errors.address}</ErrorMessage>
                )}
                <Input name='address' placeholder='Адрес'
                       value={formik.values.address}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}/>
                {postCodeValidation && (
                    <ErrorMessage>{formik.errors.postCode}</ErrorMessage>
                )}
                <Input name='postCode'
                       placeholder='Почтовый индекс'
                       value={formik.values.postCode}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}/>
            </InputWrapper>
            {acceptedTermsValidation && (
                <ErrorMessage>{formik.errors.acceptedTerms}</ErrorMessage>
            )}
            <CheckboxWrapper>
                <Label>
                    <input type='checkbox' name='acceptedTerms' id='acceptedTerms'
                           value={formik.values.acceptedTerms.toString()}
                           onChange={formik.handleChange}/>
                    <TextLabel>Я согласен на обработку персональных данных</TextLabel>
                </Label>
            </CheckboxWrapper>
            <OrderBtn type='submit' disabled={formik.isSubmitting}>
                {formik.isSubmitting ? 'ОТПРАВКА...' : 'ОФОРМИТЬ ЗАКАЗ'}
            </OrderBtn>
        </Form>
    )
}

export default FormOrder
