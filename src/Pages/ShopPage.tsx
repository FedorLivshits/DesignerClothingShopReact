import React from 'react'
import TopShopSection from '../Components/forShopPage/TopShopSection/TopShopSection'
import ProductsList from '../Components/forShopPage/ProductsList/ProductsList'
import Footer from '../Components/Footer/Footer'
import {AppWrapper} from '../GlobalStyle'

const ShopPage = () => {
    return (
        <>
            <TopShopSection/>
            <ProductsList/>
        </>
    )
}

export default ShopPage
