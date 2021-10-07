import styled from 'styled-components'

export const TextBlockWrapper = styled.div`
  padding: 100px 0;
  border-bottom: 1px solid white;
  color: white;
  @media screen and (max-width: 962px) {
      padding: 70px 0;
  }
   @media screen and (max-width: 550px) {
      padding: 50px 0;
  }
`
export const BlockTitle = styled.h3`
  font-size: 90px;
  line-height: 105px;
  font-weight: 400;
  padding-bottom: 30px;
   @media screen and (max-width: 962px) {
    font-size: 50px;
    line-height: 65px;
  }
  @media screen and (max-width: 550px) {
    font-size: 30px;
    line-height: 40px;
  }
  
`
export const TextWrapper = styled.p`
  max-width: 700px;
`
export const Text = styled.p`
  font-size: 18px;
  line-height: 25px;
  @media screen and (max-width: 550px) {
    font-size: 14px;
    line-height: 30px;
  }
`