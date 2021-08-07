import React from 'react'
import {Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import {AppWrapper, GlobalStyle} from './GlobalStyle'
import MainPage from './Pages/MainPage'
import ShopPage from './Pages/ShopPage'

const App: React.FC = () => {
    return (
        <AppWrapper>
            <GlobalStyle/>
            <Header/>
            <Switch>
                <Route exact path='/' render={() => <MainPage/>}/>
                <Route path='/shop' render={() => <ShopPage/>}/>
            </Switch>
        </AppWrapper>
    )
}

export default App
