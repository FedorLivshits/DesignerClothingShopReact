import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Container} from '../../../GlobalStyle'
import ProductCard from '../../ProductCard/ProductCard'

interface ProductsType {
    id: string | null
    photo: string | null
    'product-name': string | null
    'product-designer': string | null
    'about-product': string | null
    price: string | null
}

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
    const [products, setProducts] = useState<Array<ProductsType> | null>(null)

    useEffect(() => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(() => setProducts([]))
    }, [])

    return (
        <Container>
            <ProductsListWrapper>
                {products?.map(item => <ProductCard key={item.id} img={item.photo} name={item['product-name']}
                                                    designer={item['product-designer']} price={item.price}
                    // @ts-ignore атрибут grid принадлежит стилю компонента, это не ошибка
                                                    grid={'grid'}/>)}
            </ProductsListWrapper>
        </Container>
    )
}

export default ProductsList
