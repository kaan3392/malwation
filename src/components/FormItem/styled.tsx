import styled from "styled-components";


export const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.label`
  color: #5e6c83;
  font-size: 15px;
  align-self: flex-start;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid lightgray;
  border-radius: 7px;
  padding: 5px 10px;
  font-size: 16px;
  color: #5e6c83;
  @media only screen and (max-width: 768px) {
    height: 30px;
    font-size: 14px;
  }
  &::placeholder {
    color: lightgray;
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.span`

  color: red;
  font-size: 14px;
  margin-left:auto;
  

`