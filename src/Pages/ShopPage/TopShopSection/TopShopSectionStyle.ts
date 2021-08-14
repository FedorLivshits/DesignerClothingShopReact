import styled from 'styled-components'

export const TopShopWrapper = styled.div`
  height: 70vh;
  background-image: url('https://images.prismic.io/everpress/23e8ba6c-fc45-41f5-84e0-4a0a594a7fdd_shop-banner-2.jpg');
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
   @media screen and (max-width: 768px) {
	height: 50vh;
  }
`
export const Title = styled.h1`
    bottom: 100px;
    color: white;
    max-width: 700px;
    font-size: 50px;
    font-weight: 400;
    position: absolute;
    z-index: 99;
    line-height: 69px;
    @media screen and (max-width: 768px) {
		font-size: 35px;
	}
`
export const SubTitle = styled.div`
    bottom: 54px;
    color: white;
    max-width: 300px;
    font-size: 14px;
    font-weight: 400;
    position: absolute;
    z-index: 99;
    line-height: 18px;
    @media screen and (max-width: 768px) {
		
	}
`