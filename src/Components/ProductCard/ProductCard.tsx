import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, RouteComponentProps, useLocation } from 'react-router-dom'
import close from '../../assets/img/Close.svg'
import { removeFromLiked } from '../../redux/main-reducer'
import { ProductCardType } from '../../types/types'
import {
	IconClose,
	ProductDaysLeft,
	ProductDesigner,
	ProductImage,
	ProductInfo,
	ProductName,
	ProductPrice,
	ProductSize,
	ProductWrapper,
} from './ProductCardStyle'



const ProductCard: React.FC<ProductCardType> = ({
	id,
	img,
	name,
	designer,
	price,
	size,
}) => {
	const [number, setNumber] = useState(0)
	const dispatch = useDispatch()
	const { pathname } = useLocation()

	useEffect(() => {
		let rand = 1 - 0.5 + Math.random() * 30
		setNumber(Math.round(rand))
	}, [])

	const num_word = (value: number) => {
		let words = ['день', 'дня', 'дней']
		value = Math.abs(value) % 100
		let num = value % 10
		if (value > 10 && value < 20) return words[2]
		if (num > 1 && num < 5) return words[1]
		if (num === 1) return words[0]
		return words[2]
	}
	const onCloseBtn = (id: string) => {
		dispatch(removeFromLiked(id))
	}
	return (
		<ProductWrapper>
			{pathname === '/liked' && (
				<IconClose src={close} onClick={() => onCloseBtn(id as string)} />
			)}
			<Link to={`/shop/${id}`}>
				<ProductImage src={img as string} />
			</Link>
			<ProductInfo>
				<Link to={`/shop/${id}`}>
					<ProductName>{name!.toUpperCase()}</ProductName>
				</Link>
				<ProductDesigner>{designer}</ProductDesigner>
				<ProductDaysLeft>
					{number} {num_word(number)} до предзаказа
				</ProductDaysLeft>
				{pathname === '/liked' && (
					<ProductSize>Выбранный размер: {size}</ProductSize>
				)}
				<ProductPrice>{price} руб.</ProductPrice>
			</ProductInfo>
		</ProductWrapper>
	)
}
export default ProductCard
