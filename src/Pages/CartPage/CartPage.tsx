import React, {useEffect} from 'react'
import {Container} from '../../GlobalStyle'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import {ProductType} from '../../types/types'
import CartProductCard from '../../Components/CartProductCard/CartProductCard'
import {
    PageWrapper,
    CheckoutButton,
    MainTitle,
    NavLink,
    ProductsInCart,
    Subtotal,
    SubtotalPrice,
    Summary,
    SummaryWrapper,
    Text,
    TextWrapper
} from './CartPageStyle'

const CartPage = () => {
    const cartProducts = useSelector((state: AppStateType) => state.mainReducer.cart)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartProducts))
    }, [cartProducts])

    return (
        <Container>
            <PageWrapper>
                <ProductsInCart>
                    <MainTitle>
                        ТОВАРЫ В КОРЗИНЕ
                    </MainTitle>
                    {cartProducts.length
                        ?
                        <>
                            {cartProducts.map((p: ProductType) => <CartProductCard key={p.id} img={p.photo}
                                                                                   designer={p['product-designer']}
                                                                                   id={p.id} name={p['product-name']}
                                                                                   price={p.price} size={p.size} quantity={p.quantity}/>)}
                        </>
                        :
                        <TextWrapper>
                            <Text>
                                Сейчас в корзине ничего нет :(
                            </Text>
                            <NavLink to='/shop'>
                                Давайте найдем что-нибудь!
                            </NavLink>
                        </TextWrapper>
                    }
                </ProductsInCart>
                <Summary>
                    <MainTitle>
                        СУММА ПОКУПОК
                    </MainTitle>
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
                    <CheckoutButton to='/order' disabled={!cartProducts.length}>
                        ПРОДОЛЖИТЬ ПОКУПКУ
                    </CheckoutButton>
                </Summary>
            </PageWrapper>
        </Container>
    )
}

export default CartPage
