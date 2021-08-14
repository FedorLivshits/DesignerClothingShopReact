import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const OurMissionSectionWrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr 2fr 3fr;
   grid-gap: 40px;
   margin-bottom: 70px;
    @media screen and (max-width: 1100px) {
        grid-template-columns: 2fr 3fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
export const OurMissionColGif = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin-right: 0;
    @media screen and (max-width: 1100px) {
       display: none;
   }
`
export const OurMissionCol = styled.div<{ mr?: boolean }>`
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
export const TitleCol = styled.h5<{fontBig?: boolean}>`
   font-size:  ${props => props.fontBig ? '18px' : '14px'};
   font-weight: 400;
   margin-top: 20px;
   margin-bottom: 10px;
`
export const MainTitle = styled.h3`
   font-size: 81px;
   line-height: 92px;
   font-weight: 400;
   @media screen and (max-width: 1100px) {
      font-size: 30px;
      line-height: 45px;
   }
    @media screen and (max-width: 768px) {
      font-size: 28px;
      line-height: 37px;
   }
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
