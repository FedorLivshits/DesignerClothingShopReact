import React from 'react'
import {Container} from '../GlobalStyle'
import {MainTitle, PageWrapper, Subtotal, SubtotalPrice, Summary, SummaryWrapper} from './CartPage/CartPageStyle'
import styled from 'styled-components'
import {Select} from './ProductPage/ProductPageStyle'
import {countries} from '../assets/arrayOfCountries/countriesArray'
import CartProductCard from '../Components/CartProductCard/CartProductCard'
import {ProductType} from '../types/types'
import {useSelector} from 'react-redux'
import {AppStateType} from '../redux/store'

export const Form = styled.form`

`
export const Order = styled.div`

`
export const InputWrapper = styled.div`
    margin-bottom: 30px;
    margin-top: 20px;
    &:first-child {
        padding-top: 20px;
        border-top: 1px solid;
    }
`
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 12px;
    border: 1px solid #bebebe;
    margin-bottom: 10px;
    outline-color: #4470f3;
    outline-width: thin;
`
const OrderPage = () => {
    const cartProducts = useSelector((state: AppStateType) => state.mainReducer.cart)


    return (
        <Container>
            <PageWrapper>
                <Form>
                    <MainTitle>
                        ЗАПОЛНИТЕ ФОРМУ
                    </MainTitle>
                    <InputWrapper>
                        <Input name='name' placeholder='Имя'/>
                        <Input name='surname'placeholder='Фамилия'/>
                    </InputWrapper>
                    <InputWrapper>
                        <Select>
                            {countries.map(c => {
                                return <option value='c'>{c}</option>
                            })}
                        </Select>
                        <Input name='city' placeholder='Город'/>
                        <Input name='address' placeholder='Адрес'/>
                        <Input name='post-code' placeholder='Почтовый индекс'/>
                    </InputWrapper>
                </Form>
                <Order>
                    <MainTitle>
                       ВАШ ЗАКАЗ
                    </MainTitle>
                    {cartProducts.map((p: ProductType) => <CartProductCard key={p.id} img={p.photo}
                                                                           designer={p['product-designer']}
                                                                           id={p.id} name={p['product-name']}
                                                                           price={p.price} size={p.size} quantity={p.quantity}/>)}
                    <SummaryWrapper>
                        <Subtotal>
                            ИТОГО
                        </Subtotal>
                        <SubtotalPrice>
                            {cartProducts.length
                                ?
                                <>
                                    {cartProducts.reduce((acc, p) => {
                                        if (p.price && p.quantity) {
                                            let price = +p.price * p.quantity
                                            return acc + price
                                        }
                                        return acc
                                    }, 0)} руб.
                                </>
                                :
                                ''
                            }
                        </SubtotalPrice>
                    </SummaryWrapper>
                </Order>
            </PageWrapper>
        </Container>
    )
}

export default OrderPage
