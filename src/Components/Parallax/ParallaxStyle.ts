import styled from 'styled-components'

export const ParallaxSection = styled.div`
    min-height: 100vh;
    background-image: url('https://nestperformance.com/wp-content/uploads/2020/03/LOOKBOOK-AUG-2019-PORTRAIT-1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    position: relative;
     &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,.5);
  }
`
export const ParallaxTitle = styled.h3`
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  color: white;
  max-width: 800px;
  font-size: 60px;
  font-weight: 400;
  position: absolute;
  z-index: 99;
  line-height: 69px;
`