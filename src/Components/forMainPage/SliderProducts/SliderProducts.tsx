import React, {useEffect, useState} from 'react'
import {Container} from '../../../GlobalStyle'
import Carousel from 'react-elastic-carousel'
import './customSlider.css'
import {NavLink, SliderProductsWrapper, Title} from './SliderProductsStyle'
import ProductCard from '../../ProductCard/ProductCard'


const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2, itemsToScroll: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
]

interface ProductsType {
    id: string | null
    photo: string | null
    'product-name': string | null
    'product-designer': string | null
    'about-product': string | null
    price: string | null
}



const SliderProducts = () => {
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
        <>
            <Container>
                <SliderProductsWrapper>
                    <Title>
                        ИЗБРАННОЕ НАШИМ СООБЩЕСТВОМ
                    </Title>
                    <NavLink to='/shop'>
                        Посмотреть все товары
                    </NavLink>
                    <Carousel breakPoints={breakPoints} isRTL={false}>
                        {products?.map(item => {
                            return <ProductCard key={item.id} id={item.id} img={item.photo} name={item['product-name']}
                                                designer={item['product-designer']} price={item.price}/>
                        })}
                    </Carousel>
                </SliderProductsWrapper>
            </Container>
        </>
    )
}

export default SliderProducts
