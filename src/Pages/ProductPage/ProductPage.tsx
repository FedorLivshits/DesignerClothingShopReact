import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../api/api'
import { addToCart, addToLiked, getProduct } from '../../redux/main-reducer'
import { AppStateType } from '../../redux/store'
import { ProductType } from '../../types/types'
import {
    AddButton,
    Button,
    Designer,
    PreOrder,
    Price,
    ProductDescr,
    ProductImage, 
    ProductInfo,
    ProductName,
    ProductPageWrapper,
    Select,
    SelectTitle,
    SelectWrapper,
    Wrapper
} from './ProductPageStyle'


const ProductPage: React.FC = () => {
	const [productSize, setProductSize] = useState('')
	const [productQuantity, setProductQuantity] = useState(0)
	const [checkSelect, setcheckSelect] = useState(false)
	const likedProducts = useSelector(
		(state: AppStateType) => state.mainReducer.liked
	)
	const cartProducts = useSelector(
		(state: AppStateType) => state.mainReducer.cart
	)
	const product = useSelector(
		(state: AppStateType) => state.mainReducer.product
	)
	const dispatch = useDispatch()
	
    const  {id: productId}  = useParams<{id: string}>();

	useEffect(() => {
		fetchProduct(productId).then(product => dispatch(getProduct(product[0])))
	}, [])

	const onAddToLiked = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		product: ProductType,
		size: string,
		quantity: number
	) => {
		if (
			!productSize ||
			!productQuantity ||
			(!productSize && !productQuantity)
		) {
			e.preventDefault()
			setcheckSelect(true)
		} else {
			dispatch(addToLiked(product, size, quantity))
		}
	}
	const onAddToCart = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		product: ProductType,
		size: string,
		quantity: number
	) => {
		if (
			!productSize ||
			!productQuantity ||
			(!productSize && !productQuantity)
		) {
			e.preventDefault()
			setcheckSelect(true)
		} else {
			dispatch(addToCart(product, size, quantity))
		}
	}
	const disableLikedBtn = () => {
		if (likedProducts.length) {
			return likedProducts.some(p => p.id === product!.id)
		}
	}
	const disableCartBtn = () => {
		if (cartProducts.length) {
			return cartProducts.some(p => p.id === product!.id)
		}
	}
	const onSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setProductSize(e.target.value)
		setcheckSelect(false)
	}
	const onQuantityProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setProductQuantity(+e.target.value)
		setcheckSelect(false)
	}
	return (
		<>
			{product ? (
				<>
					<ProductPageWrapper>
						<ProductImage src={product.photo as string} />
						<ProductInfo>
							<Designer>{product['product-designer']}</Designer>
							<ProductName>{product['product-name']}</ProductName>
							<ProductDescr>{product['about-product']}</ProductDescr>
							<Wrapper>
								<Price>{product.price} ??????.</Price>
								<PreOrder>???????????????????????? ????????????</PreOrder>
							</Wrapper>
							<Button
								onClick={e =>
									onAddToLiked(e, product, productSize, productQuantity)
								}
								disabled={disableLikedBtn()}>
								{disableLikedBtn() ? '??????????????????' : '?? ??????????????????'}
							</Button>
							<SelectWrapper>
								<SelectTitle>???????????????? ????????????</SelectTitle>
								<Select onChange={e => onSizeChange(e)} check={checkSelect}>
									<option value='' disabled selected>
										????????????
									</option>
									<option value='XS'>XS</option>
									<option value='S'>S</option>
									<option value='M'>M</option>
									<option value='L'>L</option>
									<option value='XL'>XL</option>
								</Select>
								<SelectTitle>???????????????? ????????????????????</SelectTitle>
								<Select
									onChange={e => onQuantityProductChange(e)}
									check={checkSelect}>
									<option value='' disabled selected>
										????????????????????
									</option>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
								</Select>
							</SelectWrapper>
							<AddButton
								to='/cart'
								onClick={e =>
									onAddToCart(e, product, productSize, productQuantity)
								}
								disabled={disableCartBtn() as boolean}>
								{disableCartBtn()
									? '?????????????????? ?? ??????????????'
									: '???????????????? ?? ??????????????'}
							</AddButton>
						</ProductInfo>
					</ProductPageWrapper>
				</>
			) : (
				''
			)}
		</>
	)
}

export default ProductPage
