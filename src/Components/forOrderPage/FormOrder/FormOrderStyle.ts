import styled from 'styled-components'

export const Form = styled.form``
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`
export const InputWrapper = styled.div`
    margin-bottom: 30px;
    margin-top: 20px;
    &:first-child {
        padding-top: 20px;
        border-top: 1px solid;
    }
`
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 12px;
    border: 1px solid #bebebe;
    margin-bottom: 10px;
    outline-color: #4470f3;
    outline-width: thin;
`
export const OrderBtn = styled.button<{ disabled: boolean }>`
    width: 100%;
    padding: 10px;
    font-size: 12px;
    background: ${props => props.disabled ? '#e4e6ea' : 'black'};
    color:  ${props => props.disabled ? '#a49b98' : 'white'};;
    cursor: pointer;
    border: none;
    pointer-events: ${props => props.disabled && 'none'};
    &:hover{
      background: #2b2b2b;
    }
`
export const Label = styled.label`
    margin-bottom: 10px;
    font-size: 12px;
    opacity: 0.8;
    cursor: pointer;
    display: flex;
    align-items: center;
`
export const TextLabel = styled.span`
    margin-left: 10px;
`
export const CheckboxWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
`