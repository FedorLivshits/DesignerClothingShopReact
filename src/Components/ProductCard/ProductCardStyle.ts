import styled from 'styled-components'

export const ProductWrapper = styled.div<{grid?: string}>`
 display: flex;
 flex-direction: column;
 margin-right: ${props => props.grid ? '0' : '25px'};
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
export const ProductPrice = styled.span`
  padding-top: 3px;
  font-size: 14px;
`