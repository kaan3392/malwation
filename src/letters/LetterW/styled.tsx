import styled from "styled-components";
import { IPropsLetter } from "../types";

export const WLetter = styled.span<IPropsLetter>`
  font-size: ${({ login }) => (login ? "35px" : "28px")};
  font-weight: 600;
  position: relative;
  color: gray;
  @media only screen and (max-width: 768px) {
    font-size: ${({ login }) => (login ? "35px" : "18px")};
  }

  &:after {
    content: "";
    position: absolute;
    top: ${({ login }) => (login ? "8px" : "5px")};
    left: ${({ login }) => (login ? "13px" : "10px")};
    width: 2px;
    height: 15px;
    background-color: white;
    transform: rotate(166deg);

    @media only screen and (max-width: 768px) {
      top: ${({ login }) => (login ? "8px" : "3px")};
      left: ${({ login }) => (login ? "13px" : "6px")};
      height: ${({ login }) => (login ? "15px" : "10px")};
      width: ${({ login }) => (login ? "2px" : "1.5px")};

    }
  }
`;
