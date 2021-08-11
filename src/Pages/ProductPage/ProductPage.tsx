import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {addToCart, addToLiked, getProduct} from '../../redux/main-reducer'
import {fetchProduct} from '../../api/api'
import {ProductType} from '../../types/types'
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


type PathParamsType = {
    id: string
}
type PropsType = RouteComponentProps<PathParamsType>

const ProductPageComponent: React.FC<PropsType> = (props) => {
    const [productSize, setProductSize] = useState('XS')
    const [productQuantity, setProductQuantity] = useState(1)
    const likedProducts = useSelector((state: AppStateType) => state.mainReducer.liked)
    const cartProducts = useSelector((state: AppStateType) => state.mainReducer.cart)
    const product = useSelector((state: AppStateType) => state.mainReducer.product)
    const dispatch = useDispatch()

    useEffect(() => {
        let productId: string | null = props.match.params.id
        fetchProduct(productId)
            .then((product) => dispatch(getProduct(product[0])))
    }, [])

    const onAddToLiked = (product: ProductType, size: string) => {
        dispatch(addToLiked(product, size))
    }
    const onAddToCart = (product: ProductType, size: string, quantity: number) => {
        dispatch(addToCart(product, size, quantity))
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
    }
    const onQuantityProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProductQuantity(+e.target.value)
    }
    return (
        <>
            {product
                ?
                <>
                    <ProductPageWrapper>
                        <ProductImage src={product.photo as string}/>
                        <ProductInfo>
                            <Designer>
                                {product['product-designer']}
                            </Designer>
                            <ProductName>
                                {product['product-name']}
                            </ProductName>
                            <ProductDescr>
                                {product['about-product']}
                            </ProductDescr>
                            <Wrapper>
                                <Price>
                                    {product.price} руб.
                                </Price>
                                <PreOrder>
                                    Предзакажите сейчас
                                </PreOrder>
                            </Wrapper>
                            <Button onClick={() => onAddToLiked(product, productSize)} disabled={disableLikedBtn()}>
                                {disableLikedBtn() ? 'ДОБАВЛЕНО' : 'В ИЗБРАННОЕ'}
                            </Button>
                            <SelectWrapper>
                                <SelectTitle>
                                    Выберете размер
                                </SelectTitle>
                                <Select onChange={(e) => onSizeChange(e)}>
                                    <option value='XS'>XS</option>
                                    <option value='S'>S</option>
                                    <option value='M'>M</option>
                                    <option value='L'>L</option>
                                    <option value='XL'>XL</option>
                                </Select>
                                <SelectTitle>
                                    Выберете количество
                                </SelectTitle>
                                <Select onChange={(e) => onQuantityProductChange(e)}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </Select>
                            </SelectWrapper>
                            <AddButton to='/cart' onClick={() => onAddToCart(product, productSize, productQuantity)}
                                       disabled={disableCartBtn() as boolean}>
                                {disableCartBtn() ? 'ДОБАВЛЕНО В КОРЗИНУ' : 'ДОБАВИТЬ В КОРЗИНУ'}
                            </AddButton>
                        </ProductInfo>
                    </ProductPageWrapper>
                </>
                :
                ''
            }
        </>
    )
}

const ProductPage = withRouter(ProductPageComponent)
export default ProductPage
