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

const CartProductCard: React.FC<ProductCardType> = ({id, img, name, designer, price, size}) => {
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
                <ButtonRemove>
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