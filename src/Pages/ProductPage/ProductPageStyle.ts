import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ProductPageWrapper = styled.div`
     display: grid;
     grid-template-columns: 2fr 1fr;
`
export const ProductImage = styled.img`
    margin-top: 58px;
    width: 100%
`
export const ProductInfo = styled.div`
    padding: 150px 40px;
    background: white;  
`
export const Designer = styled.span`
   display: block;
   font-size: 14px;
   margin-bottom: 15px;
`
export const ProductName = styled.h1`
    font-size: 36px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 15px;
`
export const ProductDescr = styled.div`
    font-size: 14px;
    margin-bottom: 35px;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const Price = styled.span`
    font-size: 22px;
`
export const PreOrder = styled.span`
    font-size: 14px;
    opacity: 0.7;
`
export const Button = styled.button`
    font-size: 10px;
    color: white;
    background: black;
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    float: right;
    &:disabled{
      pointer-events: none;
      background: #4e4e4e;
    }
`
export const SelectWrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 20px;
`
export const SelectTitle = styled.span`
    display: block;
    font-size: 10px;
    opacity: 0.7;
    margin-bottom: 10px;
    margin-top: 10px;
`
export const Select = styled.select`
   padding: 10px; 
   font-size: 14px; 
   width: 100%;
`
export const AddButton = styled(Link)<{disabled: boolean}>`
    display: block;
    text-align: center;
    font-size: 14px;
    color: white;
    background: ${props => props.disabled ?  '#4e4e4e' : 'black'};
    padding: 10px 20px;
    width: 100%;
    pointer-events: ${props => props.disabled && 'none'};
`