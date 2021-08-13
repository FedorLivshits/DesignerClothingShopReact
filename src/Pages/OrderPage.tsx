import React, {useState} from 'react'
import {Container} from '../GlobalStyle'
import {MainTitle, PageWrapper, Subtotal, SubtotalPrice, SummaryWrapper} from './CartPage/CartPageStyle'
import styled from 'styled-components'
import CartProductCard from '../Components/CartProductCard/CartProductCard'
import {ProductType} from '../types/types'
import {useSelector} from 'react-redux'
import {AppStateType} from '../redux/store'
import FormOrder from '../Components/forOrderPage/FormOrder/FormOrder'
import Loading from '../Components/Modal/Loading'

export const Order = styled.div``

const OrderPage = () => {

    const cartProducts = useSelector((state: AppStateType) => state.mainReducer.cart)

    return (
        <Container>
            <PageWrapper>
                <FormOrder/>
                <Order>
                    <MainTitle>
                        ВАШ ЗАКАЗ
                    </MainTitle>
                    {cartProducts.map((p: ProductType) => <CartProductCard key={p.id} img={p.photo}
                                                                           designer={p['product-designer']}
                                                                           id={p.id} name={p['product-name']}
                                                                           price={p.price} size={p.size}
                                                                           quantity={p.quantity}/>)}
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
                <Loading>

                </Loading>
            </PageWrapper>
        </Container>
    )
}

export default OrderPage
