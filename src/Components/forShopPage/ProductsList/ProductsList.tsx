import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Container} from '../../../GlobalStyle'
import ProductCard from '../../ProductCard/ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../../redux/store'
import {fetchProducts} from '../../../api/api'
import {getProducts, setProductsThunk} from '../../../redux/main-reducer'

export const ProductsListWrapper = styled.div`
  margin: 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  @media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

const ProductsList = () => {
    const products = useSelector((state: AppStateType) => state.mainReducer.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProductsThunk())
    }, [])

    return (
        <Container>
            <ProductsListWrapper>
                {products?.map(item => <ProductCard key={item.id} id={item.id} img={item.photo}
                                                    name={item['product-name']}
                                                    designer={item['product-designer']} price={item.price}
                    // @ts-ignore атрибут grid принадлежит стилю компонента, это не ошибка
                                                    grid/>)}
            </ProductsListWrapper>
        </Container>
    )
}

export default ProductsList
