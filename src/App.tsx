import React from 'react'
import {Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import {AppWrapper, GlobalStyle} from './GlobalStyle'
import MainPage from './Pages/MainPage'

const App: React.FC = () => {
    return (
        <AppWrapper>
            <GlobalStyle/>
            <Header/>
            <Switch>
                <Route exact path='/' render={() => <MainPage/>}/>
            </Switch>
        </AppWrapper>
    )
}

export default App
