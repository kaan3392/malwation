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
  &::placeholder {
    color: lightgray;
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;