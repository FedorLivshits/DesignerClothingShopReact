import React from 'react'
import Header from './Components/Header/Header'
import {AppWrapper, GlobalStyle} from './GlobalStyle'
import MainPage from './Pages/MainPage'

const App: React.FC = () => {
    return (
        <AppWrapper>
            <GlobalStyle/>
            <Header/>
            <MainPage/>
        </AppWrapper>
    )
}

export default App
