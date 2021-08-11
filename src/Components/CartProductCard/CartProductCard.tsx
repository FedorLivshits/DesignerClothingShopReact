import React from 'react'
import {
    Amount,
    ButtonRemove,
    CartProductCardWrapper,
    Price,
    ProductImage,
    ProductInfo,
    Size,
    Title
} from './CartProductCardStyle'
import {useDispatch} from 'react-redux'
import {removeFromCart} from '../../redux/main-reducer'
import {ProductCardType} from '../../types/types'
import {RouteComponentProps, withRouter} from 'react-router-dom'

const CartProductCard: React.FC<ProductCardType & RouteComponentProps> = ({id, img, name, designer, price, size, quantity, location}) => {
    const dispatch = useDispatch()

    const onRemoveBtn = (id: string) => {
        dispatch(removeFromCart(id))
    }

    return (
        <CartProductCardWrapper>
            <ProductImage src={img as string}/>
            <ProductInfo>
                <Title>
                    {name}
                </Title>
                <Size>
                    Размер: {size}
                </Size>
                <Amount>
                    Количество: {quantity}
                </Amount>
                {location.pathname === '/order'
                    ?
                    ''
                    :
                    <ButtonRemove onClick={() => onRemoveBtn(id as string)}>
                        Удалить
                    </ButtonRemove>
                }
            </ProductInfo>
            <Price>
                {price && quantity ? +price * quantity : ''} руб.
            </Price>
        </CartProductCardWrapper>
    )
}
export default withRouter(CartProductCard)