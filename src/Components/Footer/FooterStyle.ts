import styled from 'styled-components'

export const FooterWrapper = styled.footer<{blackBg?: boolean}>`
    padding-top: 200px;
    padding-bottom: 100px;
    background: ${props => props.blackBg ? 'black' : 'white'};
    color: ${props => props.blackBg ? 'white' : 'black'};
    @media screen and (max-width: 768px) {
      padding-top: 100px;
    }
`
export const FooterInner = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      justify-items: start;
    }
`
export const Col = styled.div`
`
export const Title = styled.span`
    display: inline-block;
    font-size: 14px;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
       margin-bottom: 10px;
    }
`
export const Links = styled.ul`
`
export const LinkItem = styled.li`
`
export const Link = styled.a`
    font-size: 10px;
    line-height: 25px;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
`