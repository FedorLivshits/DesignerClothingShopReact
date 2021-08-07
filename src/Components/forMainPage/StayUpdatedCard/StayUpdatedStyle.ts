import styled from 'styled-components'

export const StayUpdatedWrapper = styled.div`
   display: flex;
   align-items: center;
   background: black;
   color: white;
   height: 120px;
`
export const Icon = styled.img`
   margin: 0 30px;
`
export const Text = styled.p`
   
`
export const Form = styled.form`
   margin-left: auto;
   padding-right: 30px;
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
`