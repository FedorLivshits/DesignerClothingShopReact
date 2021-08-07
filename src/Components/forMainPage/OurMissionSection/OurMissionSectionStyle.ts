import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const OurMissionSectionWrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr 2fr 3fr;
   grid-gap: 40px;
   margin-bottom: 70px;
`
export const OurMissionCol = styled.div<{ mr?: string }>`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin-right: ${props => props.mr ? '40px' : '0'};
   &:last-child{
      margin-right: 0;
   }
`
export const Row = styled.div`
   display: flex;
   justify-content: space-between;
`
export const Image = styled.img`
   width: 100%
`
export const TitleCol = styled.h5<{fs?: string}>`
   font-size:  ${props => props.fs ? '18px' : '14px'};
   font-weight: 400;
   margin-top: 10px;
   margin-bottom: 10px;
`
export const MainTitle = styled.h3`
   font-size: 81px;
   line-height: 92px;
   font-weight: 400;
`
export const TextCol = styled.p`
    line-height: 22px;
`
export const Button = styled(Link)`
   display: inline-block;
   background: transparent;
   border: 1px solid black;
   padding: 5px;
   &:hover{
      background: black;
      color: white
   }
`