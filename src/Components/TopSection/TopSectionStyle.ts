import styled from 'styled-components'

export const TopSectionWrapper = styled.div<{ bg: boolean }>`
  min-height: 100vh;
  background-image: ${props => (props.bg ? 'url("https://images.prismic.io/everpress/b513fec7-cb57-4f7d-80c8-cc01ce472510_homepage-banner-3.jpg")' : 'url("https://images.prismic.io/everpress/47ca55c6-6967-4ddb-8267-b7a06cd1f771_homepage-banner.jpg")')};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 50px;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.3);
  }
`
export const Title = styled.h1`
  top: 120px;
  color: white;
  max-width: 700px;
  font-size: 60px;
  font-weight: 400;
  position: absolute;
  z-index: 99;
  line-height: 69px;
`
export const SubTitle = styled.div`
  bottom: 100px;
  color: white;
  max-width: 700px;
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  z-index: 99;
  line-height: 25px;
`
export const TopButton = styled.a`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 5px;
  position: relative;
  left: 20px;
  &:hover{
    background: white;
    color: black;
  }
`