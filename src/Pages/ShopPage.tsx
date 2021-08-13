import React from 'react'
import TopShopSection from '../Components/forShopPage/TopShopSection/TopShopSection'
import ProductsList from '../Components/forShopPage/ProductsList/ProductsList'
import {AppStateType} from '../redux/store'
import {useSelector} from 'react-redux'
import Loading from '../Components/Modal/Loading'

const ShopPage = () => {
    const loading = useSelector((state: AppStateType) => state.mainReducer.loading)
    return (
        <>
            <TopShopSection/>
            {loading ? <Loading/> : <ProductsList/>}
        </>
    )
}

export default ShopPage
