import React, {useEffect} from 'react'
import {Container} from '../../../GlobalStyle'
import Carousel from 'react-elastic-carousel'
import './customSlider.css'
import {NavLink, SliderProductsWrapper, Title} from './SliderProductsStyle'
import ProductCard from '../../../Components/ProductCard/ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../../redux/store'
import {setProductsThunk} from '../../../redux/main-reducer'
import FadeInWhenVisible from '../../../Components/FadeInWhenVisible/FadeInWhenVisible'


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
        dispatch(setProductsThunk())
    }, [])

    return (
        <Container>
            <SliderProductsWrapper>
                <FadeInWhenVisible>
                    <Title>
                        ИЗБРАННОЕ НАШИМ СООБЩЕСТВОМ
                    </Title>
                </FadeInWhenVisible>
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
    )
}

export default SliderProducts
