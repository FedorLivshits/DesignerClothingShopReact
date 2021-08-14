import styled from 'styled-components'

export const ParallaxSection = styled.div`
    height: 80vh;
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
   @media screen and (max-width: 768px) {
        height: 50vh;
   }
`
export const ParallaxTitle = styled.h3`
  top: 50%;
  transform: translateY(-50%);
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  max-width: 800px;
  font-size: 55px;
  font-weight: 400;
  position: absolute;
  z-index: 99;
  line-height: 69px;
   @media screen and (max-width: 768px) {
      font-size: 30px;
      line-height: 45px;
  }
`