import React from 'react'
import {ProductCardType} from '../ProductCard/ProductCard'
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

const CartProductCard: React.FC<ProductCardType> = ({id, img, name, designer, price, size}) => {
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
                    Количество
                </Amount>
                <ButtonRemove onClick={() => onRemoveBtn(id as string)}>
                    Удалить
                </ButtonRemove>
            </ProductInfo>
            <Price>
                {price} руб.
            </Price>
        </CartProductCardWrapper>
    )
}
export default CartProductCard