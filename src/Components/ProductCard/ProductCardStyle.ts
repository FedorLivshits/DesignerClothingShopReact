import styled from 'styled-components'

export const ProductWrapper = styled.div<{grid?: boolean}>`
 display: flex;
 flex-direction: column;
 margin-right: ${props => props.grid ? '0' : '25px'};
 position: relative;
`
export const IconClose = styled.img`
 width: 30px;
 background: #e2e2e2;
 border-radius: 5px;
 padding: 5px;
 position: absolute;
 top: 11px;
 right: 12px;
 bottom: 0;
 cursor: pointer;
 &:hover{
    background: #cbcbcb;
 }
`
export const ProductImage = styled.img`
 width: 100%;
`
export const ProductInfo = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 15px;
 align-items: flex-start;
`
export const ProductName = styled.a`
 font-size: 14px;
`
export const ProductDesigner = styled.span`
 padding-top: 5px;
 font-size: 12px;
`
export const ProductDaysLeft = styled.span`
  padding-top: 3px;
  font-size: 12px;
  opacity: 0.6;
`
export const ProductSize = styled.span`
  padding-top: 3px;
  font-size: 12px;
`
export const ProductPrice = styled.span`
  padding-top: 3px;
  font-size: 14px;
`