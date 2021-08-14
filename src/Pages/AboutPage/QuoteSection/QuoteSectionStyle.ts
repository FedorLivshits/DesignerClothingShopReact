import styled from 'styled-components'

export const QuoteSectionInner = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  @media screen and (max-width: 768px) {
      padding-top: 25px;
      grid-template-columns: 1fr;
      grid-gap: 25px;
      padding-bottom: 50px;
  }
`
export const Image = styled.img`
  width: 100%;
   @media screen and (max-width: 768px) {
    order: 1;
  }
`
export const TextInner = styled.div`

`
export const Text = styled.p`
  font-size: 30px;
  color: white;
  @media screen and (max-width: 768px) {
    order: -1;
    font-size: 25px;
  }
   @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const Author = styled.span`
  margin-top: 50px;
  display: block;
  color: white;
   @media screen and (max-width: 768px) {
      margin-top: 25px;
  }
`
export const Span = styled.span`
  color: white;
  font-size: 10px;
`