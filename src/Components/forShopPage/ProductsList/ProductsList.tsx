import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Container} from '../../../GlobalStyle'
import ProductCard from '../../ProductCard/ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../../redux/store'
import {setProductsByPageThunk} from '../../../redux/main-reducer'


export const ProductsListWrapper = styled.div`
  margin: 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  position: relative;
  left: 10px;
  @media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`
export const LoadMoreBtn = styled.button`
  background: black;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid black;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  &:hover{
    background: white;
    color: black;
  }
`

const ProductsList = () => {
    const [page, setPage] = useState('2')
    const productsPage = useSelector((state: AppStateType) => state.mainReducer.productsPage)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!productsPage.length) {
            dispatch(setProductsByPageThunk('1'))
        }
    }, [])

    const onLoadMoreBtn = () => {
        dispatch(setProductsByPageThunk(page))
        setPage((+page + 1).toString())
    }
    return (
        <Container>
            <ProductsListWrapper>
                {productsPage?.map((item, i) => <ProductCard key={i} id={item.id} img={item.photo}
                                                    name={item['product-name']}
                                                    designer={item['product-designer']} price={item.price}
                                                    // @ts-ignore
                                                    grid={true}/>)}
            </ProductsListWrapper>
            {productsPage.length >= 24 ? '' : <LoadMoreBtn onClick={onLoadMoreBtn}>ПОКАЗАТЬ ЕЩЕ</LoadMoreBtn>}
        </Container>
    )
}

export default ProductsList
