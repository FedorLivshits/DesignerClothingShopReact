import React from 'react'
import {Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import {AppWrapper, GlobalStyle} from './GlobalStyle'
import MainPage from './Pages/MainPage'
import ShopPage from './Pages/ShopPage'
import Footer from './Components/Footer/Footer'
import AboutPage from './Pages/AboutPage'
import ProductPage from './Pages/ProductPage/ProductPage'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import LikedPage from './Pages/LikedPage'
import CartPage from './Pages/CartPage/CartPage'

const App: React.FC = () => {
    return (
        <AppWrapper>
            <GlobalStyle/>
            <ScrollToTop/>
            <Header/>
                <Route exact path='/' render={() => <MainPage/>}/>
                <Route exact path='/shop' render={() => <ShopPage/>}/>
                <Route path='/shop/:id' render={() => <ProductPage/>}/>
                <Route path='/about' render={() => <AboutPage/>}/>
                <Route exact path='/liked' render={() => <LikedPage/>}/>
                <Route exact path='/cart' render={() => <CartPage/>}/>
            <Footer/>
        </AppWrapper>
    )
}

export default App
