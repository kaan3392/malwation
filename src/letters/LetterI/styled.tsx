import styled from "styled-components";
import { IPropsLetter } from "../types";

export const LetterI = styled.span<IPropsLetter>`
  font-size: ${({ login }) => (login ? "35px" : "28px")};
  font-weight: 600;
  position: relative;
  color: gray;
  text-align: center;
  margin-left: -4px;

  @media only screen and (max-width: 1024px) {
    font-size: ${({ login }) => (login ? "35px" : "18px")};
    margin-left:${({ login }) => (login ? "-4px" : "-6px")};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: ${({ login }) => (login ? "8.5px" : "7px")};
    left: ${({ login }) => (login ? "3px" : "1.8px")};
    border-bottom: ${({ login }) =>
      login ? "6px solid #F5F5F5" : "5px solid white"};
    border-left: ${({ login }) =>
      login ? "6px solid transparent" : "5px solid transparent"};
    border-top: ${({ login }) =>
      login ? "6px solid transparent" : "5px solid transparent"};
    width: 0px;
    height: 0px;

    @media only screen and (max-width: 1024px) {
      bottom: ${({ login }) => (login ? "8.5px" : "3px")};
      left: ${({ login }) => (login ? "3px" : "-0.5px")};
    }
  }
`;
