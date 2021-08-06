import React from 'react'
import HeaderComponent from './Components/Header/Header'
import {AppWrapper, GlobalStyle} from './GlobalStyle'


function App() {
    return (
        <AppWrapper>
            <GlobalStyle/>
            <HeaderComponent/>
        </AppWrapper>
    )
}

export default App
