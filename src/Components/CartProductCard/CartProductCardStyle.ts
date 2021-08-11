import styled from 'styled-components'

export const CartProductCardWrapper = styled.div`
   display: flex;
   padding: 20px 0;
   border-top: none;
   border-bottom: 1px solid black;
`
export const ProductImage = styled.img`
   width: 84px;
   margin-right: 10px;
`
export const ProductInfo = styled.div`
   display: flex;
   flex-direction: column;
`
export const Title = styled.h3`
   font-size: 12px;
   padding-bottom: 10px;
`
export const Size = styled.span`
   font-size: 12px;
   opacity: 0.6;
   padding-bottom: 10px;
`
export const Amount = styled.span`
   font-size: 12px;
   padding-bottom: 10px;
`
export const ButtonRemove = styled.a`
   text-decoration: underline;
   font-size: 12px;
   padding: 0;
   cursor: pointer;
   &:hover{
      text-decoration: none;
   }
`
export const Price = styled.span`
   font-size: 14px;
   margin-left: auto;
`