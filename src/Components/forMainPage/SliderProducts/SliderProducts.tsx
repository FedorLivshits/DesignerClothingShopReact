import React, {useEffect, useState} from 'react'
import {Container} from '../../../GlobalStyle'
import Carousel from 'react-elastic-carousel'
import './customSlider.css'
import {NavLink, SliderProductsWrapper, Title} from './SliderProductsStyle'
import ProductCard from '../../ProductCard/ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import { AppStateType } from '../../../redux/store'
import {getProducts} from '../../../redux/main-reducer'


const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2, itemsToScroll: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
]

const SliderProducts = () => {
    const products = useSelector((state: AppStateType) => state.mainReducer.products)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(getProducts(data))
            })
            .catch(() => alert('error'))
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
