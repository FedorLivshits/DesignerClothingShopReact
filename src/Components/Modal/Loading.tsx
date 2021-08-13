import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/logo.svg'

export const LoadingWrapper = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: white;
`
export const LoadingWindow = styled.div`
    height: 30vh;
    width: 30vw;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const LoadingText = styled.div`
   padding: 0 20px;
   text-transform: uppercase;
`
export const Icon = styled.img`
  width: 30px;
  margin-bottom: 10px;
`
const Loading: React.FC = () => {
    return (
        <LoadingWrapper>
            <LoadingWindow>
                <Icon src={logo}/>
                <LoadingText>
                    LOADING...
                </LoadingText>
            </LoadingWindow>
        </LoadingWrapper>
    )
}

export default Loading
