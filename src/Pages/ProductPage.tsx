import React from 'react'
import styled from 'styled-components'

export const ProductPageWrapper = styled.div`
     display: grid;
     grid-template-columns: 2fr 1fr;
`
export const ProductImage = styled.div`
    width: 100%
`
export const ProductInfo = styled.div`
    background: white;
`

const ProductPage = () => {
    return (
        <>
        <ProductPageWrapper>
            <ProductImage/>
            <ProductInfo>

            </ProductInfo>
        </ProductPageWrapper>
        </>
    )
}

export default ProductPage
