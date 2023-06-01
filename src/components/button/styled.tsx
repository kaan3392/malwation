import styled from "styled-components";
import { ButtonProps } from "./types";

export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.login ? "100%" : "130px")};
  height: ${(props) => props.login && "40px"};
  padding: ${(props) => (props.login ? "0px" : "8px 4px")};
  background-color: #2e7bf8;
  border: 1px solid #2e7bf8;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
  align-self: ${(props) => !props.login && "flex-end"};
  &:hover {
    background-color: inherit;
    color: #2e7bf8;
    border: 1px solid #2e7bf8;
  }
  &:disabled {
    background-color: #eaeaea;
    color: #a6a6a6;
    cursor: not-allowed;
  }
`;
