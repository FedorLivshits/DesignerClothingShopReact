import styled from 'styled-components'

export const FooterWrapper = styled.footer<{blackBg?: boolean}>`
    padding-top: 200px;
    padding-bottom: 100px;
    background: ${props => props.blackBg ? 'black' : 'white'};
    color: ${props => props.blackBg ? 'white' : 'black'};
`
export const FooterInner = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
`
export const Col = styled.div`
`
export const Title = styled.span`
    display: inline-block;
    font-size: 14px;
    margin-bottom: 20px;
`
export const Links = styled.ul`
`
export const LinkItem = styled.li`
`
export const Link = styled.a`
    font-size: 10px;
    line-height: 25px;
`