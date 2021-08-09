import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../redux/store'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {getProduct} from '../redux/main-reducer'
import {fetchProduct} from '../api/api'

export const ProductPageWrapper = styled.div`
     display: grid;
     grid-template-columns: 2fr 1fr;
`
export const ProductImage = styled.img`
margin-top: 58px;
    width: 100%
`
export const ProductInfo = styled.div`
    padding: 150px 40px;
    background: transparent;
    
`
export const Designer = styled.span`
   display: block;
   font-size: 14px;
   margin-bottom: 15px;
`
export const ProductName = styled.h1`
    font-size: 36px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 15px;
`
export const ProductDescr = styled.div`
    font-size: 14px;
    margin-bottom: 35px;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const Price = styled.span`
    font-size: 22px;
`
export const PreOrder = styled.span`
    font-size: 14px;
    opacity: 0.7;
`
export const Button = styled.button`
    font-size: 10px;
    color: white;
    background: black;
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    float: right;
`
export const SelectWrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 20px;
`
export const SelectTitle = styled.span`
    display: block;
    font-size: 10px;
    opacity: 0.7;
    margin-bottom: 10px;
`
export const AddButton = styled.button`
    font-size: 14px;
    color: white;
    background: black;
    padding: 10px 20px;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
    &:hover{
      background: #2f2f2f;
    }
`
type PathParamsType = {
    id: string
}
type PropsType = RouteComponentProps<PathParamsType>

const ProductPageComponent: React.FC<PropsType> = (props) => {
    const product = useSelector((state: AppStateType) => state.mainReducer.product)
    const dispatch = useDispatch()

    useEffect(() => {
        let productId: string | null = props.match.params.id
        fetchProduct(productId)
            .then((product) => dispatch(getProduct(product[0])))
    }, [])

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
                            <Button>
                                ОТЛОЖИТЬ
                            </Button>
                            <SelectWrapper>
                                <SelectTitle>
                                    Выберете размер
                                </SelectTitle>
                                <select style={{padding: '10px', fontSize: '14px', width: '100%'}}>
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
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
