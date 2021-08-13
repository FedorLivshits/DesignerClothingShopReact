import styled from 'styled-components'

export const StayUpdatedWrapper = styled.div`
   display: flex;
   align-items: center;
   background: black;
   color: white;
   padding: 20px 0;
     @media screen and (max-width: 850px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const Icon = styled.img`
   margin-left: 30px;
   @media screen and (max-width: 968px) {
        display: none;
    }
`
export const Text = styled.p`
   margin-left: 30px;
     @media screen and (max-width: 1300px) {
        max-width: 500px;
    }
     @media screen and (max-width: 1200px) {
        max-width: 300px;
    }
     @media screen and (max-width: 850px) {
        width: auto;
        margin-left: 0;
        margin-bottom: 10px;
    }
`
export const Form = styled.form`
   margin-left: auto;
   padding-right: 30px;
     @media screen and (max-width: 850px) {
        margin-left: 0;
        padding-right: 0;
    }
`
export const Input = styled.input`
   padding: 20px;
   text-transform: uppercase;
   background: black;
   outline: none;
   border: 1px solid white;
   border-right: none;
   width: 300px;
   &:focus{
      background: white;
      color: black;
   }
   @media screen and (max-width: 550px) {
      width: 100%;
      border-right: 1px solid white;
   }
`
export const Button = styled.button`
   background: black;
   padding: 20px;
   color: white;
   border: 1px solid white;
   border-left: none;
   cursor: pointer;
   &:hover{
      background: white;
      color: black;
   }
   @media screen and (max-width: 550px) {
      width: 100%;
      border-left: 1px solid white;
   }
`