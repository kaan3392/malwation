import styled from "styled-components";
import { InputProps } from "./types";

export const SearchContainer = styled.div<InputProps>`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  border: 2px solid #c9c9c9;
  width: ${({ long }) => (long && "45%" )};
  background-color: white;
  height: 40px;

  svg {
    width: 20px;
    fill: lightgray;
    margin-right: 10px;
  }
`;

export const SearchInput = styled.input<InputProps>`
  border: none;
  outline: none;
  font-size: 16px;
  width: 80%;
  &::placeholder {
    font-size: 16px;
    color: lightgray;
    
  }
`;