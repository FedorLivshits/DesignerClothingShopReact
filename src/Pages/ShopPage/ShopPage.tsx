import React from 'react'
import TopShopSection from './TopShopSection/TopShopSection'
import ProductsList from './ProductsList/ProductsList'
import {AppStateType} from '../../redux/store'
import {useSelector} from 'react-redux'
import Loading from '../../Components/LoadingComponent/Loading'
import {motion} from 'framer-motion'

const ShopPage = () => {
    const loading = useSelector((state: AppStateType) => state.mainReducer.loading)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0 }}>
            <TopShopSection/>
            {loading ? <Loading/> : <ProductsList/>}
        </motion.div>
    )
}

export default ShopPage
