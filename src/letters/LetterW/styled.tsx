import styled from "styled-components";
import { IPropsLetter } from "../types";

export const WLetter = styled.span<IPropsLetter>`
  font-size: ${({ login }) => (login ? "35px" : "28px")};
  font-weight: 600;
  position: relative;
  color: gray;

  &:after {
    content: "";
    position: absolute;
    top: ${({ login }) => (login ? "8px" : "5px")};
    left: ${({ login }) => (login ? "13px" : "10px")};
    width: 2px;
    height: 15px;
    background-color: white;
    transform: rotate(166deg);
  }
`;
