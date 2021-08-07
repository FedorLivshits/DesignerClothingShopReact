import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SliderProductsWrapper = styled.div`
   min-height: 100vh;
`
export const Title = styled.h3`
   padding-top: 70px;
   font-size: 30px;
   line-height: 40px;
   font-weight: 400;  
`
export const NavLink = styled(Link)`
   display: inline-block;
   margin: 20px 10px 40px 0;
   font-size: 14px;
   line-height: 22px;
   font-weight: 400;
   &:hover{
    text-decoration: underline;
   }
`