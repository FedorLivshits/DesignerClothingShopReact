import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import { AppWrapper, GlobalStyle } from './GlobalStyle'
import MainPage from './Pages/MainPage/MainPage'
import ShopPage from './Pages/ShopPage/ShopPage'
import Footer from './Components/Footer/Footer'
import AboutPage from './Pages/AboutPage/AboutPage'
import ProductPage from './Pages/ProductPage/ProductPage'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import LikedPage from './Pages/LikedPage/LikedPage'
import CartPage from './Pages/CartPage/CartPage'
import OrderPage from './Pages/OrderPage/OrderPage'
import { AnimatePresence } from 'framer-motion'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'

const App: React.FC = () => {
	return (
		<AppWrapper>
			<GlobalStyle />
			<ScrollToTop />
			<Header />
			<AnimatePresence>
				<Switch>
					<Route exact path='/' render={() => <MainPage />} />
					<Route exact path='/shop' render={() => <ShopPage />} />
					<Route path='/shop/:id' render={() => <ProductPage />} />
					<Route path='/about' render={() => <AboutPage />} />
					<Route exact path='/liked' render={() => <LikedPage />} />
					<Route exact path='/cart' render={() => <CartPage />} />
					<Route exact path='/order' render={() => <OrderPage />} />
					<Route component={NotFoundPage} />
				</Switch>
			</AnimatePresence>
			<Footer />
		</AppWrapper>
	)
}

export default App
