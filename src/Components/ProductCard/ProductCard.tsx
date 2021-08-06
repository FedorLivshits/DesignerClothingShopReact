import React, {useEffect, useState} from 'react'
import {
    ProductDaysLeft,
    ProductDesigner,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductPrice,
    ProductWrapper
} from './ProductCardStyle'

interface ProductCardType {
    img: string | null
    name: string | null
    designer: string | null
    price: string | null
}

const ProductCard: React.FC<ProductCardType> = ({img, name, designer, price}) => {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        let rand = 1 - 0.5 + Math.random() * (30)
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

    return (
        <ProductWrapper>
            <ProductImage src={img as string}/>
            <ProductInfo>
                <ProductName>
                    {name!.toUpperCase()}
                </ProductName>
                <ProductDesigner>
                    {designer}
                </ProductDesigner>
                <ProductDaysLeft>
                    {number} {num_word(number)} до предзаказа
                </ProductDaysLeft>
                <ProductPrice>
                    {price} руб.
                </ProductPrice>
            </ProductInfo>
        </ProductWrapper>
    )
}
export default ProductCard
