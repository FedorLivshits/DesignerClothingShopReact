import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {addToLiked, getProduct} from '../../redux/main-reducer'
import {fetchProduct} from '../../api/api'
import {ProductType} from '../../types/types'
import {
    AddButton, Button,
    Designer,
    PreOrder,
    Price,
    ProductDescr, ProductImage, ProductInfo, ProductName,
    ProductPageWrapper,
    Select, SelectTitle,
    SelectWrapper,
    Wrapper
} from './ProductPageStyle'


type PathParamsType = {
    id: string
}
type PropsType = RouteComponentProps<PathParamsType>

const ProductPageComponent: React.FC<PropsType> = (props) => {
    const [productSize, setProductSize] = useState('XS')
    const likedProducts = useSelector((state: AppStateType) => state.mainReducer.liked)
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
    const disabledBtn = () => {
        if (likedProducts.length) {
            let storedLiked = likedProducts.some(p => p.id === product!.id)
            console.log(storedLiked)
            return storedLiked
        }
    }
    const onSizeChange = (e: any) => {
        setProductSize(e.target.value)
        console.log(e.target.value)
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
                            <Button onClick={() => onAddToLiked(product, productSize)} disabled={disabledBtn()}>
                                {disabledBtn() ? 'ДОБАВЛЕНО' : 'ОТЛОЖИТЬ'}
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
                            </SelectWrapper>
                            <AddButton>
                                ДОБАВИТЬ В КОРЗИНУ
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
