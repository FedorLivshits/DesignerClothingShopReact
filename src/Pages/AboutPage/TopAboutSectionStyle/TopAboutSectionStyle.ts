import styled from 'styled-components'

export const TopAboutSectionWrapper = styled.h1`
   margin-bottom: 40px;
`
export const MainTitle = styled.h1`
    color: white;
    padding-top: 120px;
    font-size: 150px;
    font-weight: 400;
    margin-bottom: 40px;
     @media screen and (max-width: 1160px) {
       font-size: 100px;
    }
     @media screen and (max-width: 992px) {
       font-size: 50px;
    }
     @media screen and (max-width: 550px) {
       font-size: 30px;
    }
`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
     @media screen and (max-width: 768px) {
       flex-direction: column;
    }
`
export const TextInner = styled.div`
    max-width: 435px;
    margin-right: 50px;
      @media screen and (max-width: 768px) {
       min-width: 100%;
       margin-right: 0;
    }
`
export const Text = styled.p`
   font-size: 18px;
   line-height: 30px;
   color: white;
   margin-bottom: 20px;
    @media screen and (max-width: 992px) {
       font-size: 14px;
      line-height: 28px;
    }
`
export const Image = styled.img`
   width: 90%;
   border: 2px solid white;
   object-fit: cover;
     @media screen and (max-width: 1300px) {
       width: 65%;
    }
     @media screen and (max-width: 1000px) {
       width: 50%;
    }
     @media screen and (max-width: 768px) {
       width: 100%;
    }
`