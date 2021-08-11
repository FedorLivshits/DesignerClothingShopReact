import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const CartPageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    min-height: 100vh;
`
export const MainTitle = styled.h2`
   padding-top: 120px;
   padding-bottom: 15px;
   font-size: 14px;
   font-weight: 400;
`
export const ProductsInCart = styled.div``
export const Summary = styled.div``
export const SummaryWrapper = styled.div`
   padding: 20px 0;
   border-top: 1px solid black;
   display: flex;
   justify-content: space-between;
`
export const Subtotal = styled.div`
   font-size: 12px;
`
export const SubtotalPrice = styled.div`
   font-size: 14px;
`
export const CheckoutButton = styled.a<{ disabled: boolean }>`
    display: block;
    width: 100%;
    background: ${props => props.disabled ? '#e4e6ea' : 'black'};
    color:  ${props => props.disabled ? '#a49b98' : 'white'};;
    padding: 15px 0;
    border: none;
    text-align: center;
    pointer-events: ${props => props.disabled && 'none'};
    &:hover{
       background: #262626;
    }
`
export const TextWrapper = styled.div`
   padding: 20px 0;
   border-top: 1px solid black;
   border-bottom: 1px solid black;
`
export const Text = styled.p`
    font-size: 14px;
    padding-bottom: 5px;
`
export const NavLink = styled(Link)`
    font-size: 14px;
    text-decoration: underline;
    &:hover{
      text-decoration: none;
    }
`