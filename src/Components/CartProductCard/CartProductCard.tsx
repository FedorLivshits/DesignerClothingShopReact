import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { removeFromCart } from '../../redux/main-reducer'
import { ProductCardType } from '../../types/types'
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

const CartProductCard: React.FC<ProductCardType> = ({
	id,
	img,
	name,
	price,
	size,
	quantity
}) => {
	const dispatch = useDispatch()
	const { pathname } = useLocation()
	const onRemoveBtn = (id: string) => {
		dispatch(removeFromCart(id))
	}

	return (
		<CartProductCardWrapper>
			<ProductImage src={img as string} />
			<ProductInfo>
				<Title>{name}</Title>
				<Size>Размер: {size}</Size>
				<Amount>Количество: {quantity}</Amount>
				{pathname === '/order' ? (
					''
				) : (
					<ButtonRemove onClick={() => onRemoveBtn(id as string)}>
						Удалить
					</ButtonRemove>
				)}
			</ProductInfo>
			<Price>{price && quantity ? +price * quantity : ''} руб.</Price>
		</CartProductCardWrapper>
	)
}
export default CartProductCard
