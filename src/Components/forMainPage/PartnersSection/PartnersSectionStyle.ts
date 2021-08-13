import styled from 'styled-components'

export const Title = styled.div`
    margin-top: 120px;
    color: black;
    max-width: 700px;
    font-size: 60px;
    font-weight: 400;
    line-height: 69px;
    margin-bottom: 50px;
    @media screen and (max-width: 768px) {
       margin-top: 70px;
       font-size: 30px;
       line-height: 40px;
  }
`
export const PartnersBrandsInner = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 50px;
`
export const PartnerLogoWrapper = styled.div`
    max-width: 100px;
`
export const PartnerLogo = styled.img`
    width: 100%;
    height: auto;
`
export const PartnerLogoSpecial = styled.img`
    max-width: 30px;
    height: auto;
`
