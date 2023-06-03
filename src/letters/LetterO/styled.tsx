import styled from "styled-components";
import { IPropsLetter } from "../types";

export const Div1 = styled.span<IPropsLetter>`
  width: ${({ login }) => (login ? "25px" : "20px")};
  height: ${({ login }) => (login ? "25px" : "20px")};
  background-color: inherit;
  border: 5px solid black;
  position: relative;
  border-inline-color: lightgray;
  border-block-color: #999999;
  display: inline-block;
  margin: 0px 5px;

  @media only screen and (max-width: 1024px) {
    width: ${({ login }) => (login ? "25px" : "12.5px")};
    height: ${({ login }) => (login ? "25px" : "12.5px")};
    border: ${({ login }) => (login ? "5px solid black" : "3px solid black")};
    border-inline-color: lightgray;
    border-block-color: #999999;
    margin: ${({ login }) => (login ? "0px 5px" : "0px 2px")};
  }

  &:before {
    content: "+";
    position: absolute;
    top: 0;
    left: 4px;
    right: 0;
    bottom: 0;
    font-size: ${({ login }) => (login ? "60px" : "50px")};
    color: ${({ login }) => (login ? "#F5F5F5" : "white")};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;

    @media only screen and (max-width: 1024px) {
      font-size: ${({ login }) => (login ? "60px" : "31px")};
      bottom: ${({ login }) => (login ? "0" : "-1px")};
      left: ${({ login }) => (login ? "4px" : "2px")};
      font-weight: ${({ login }) => !login && "300"};
    }
  }
`;


export const Div2 = styled.span<IPropsLetter>`
  position: absolute;
  width: ${({ login }) => (login ? "4px" : "5px")};
  height: ${({ login }) => (login ? "4px" : "5px")};
  background-color: #6f6f6f;
  left: ${({ login }) => (login ? "-4px" : "-5px")};
  bottom: 0;

  @media only screen and (max-width: 1024px) {
    width: ${({ login }) => (login ? "4px" : "2.5px")};
    height: ${({ login }) => (login ? "4px" : "2.5px")};
    left:${({ login }) => (login ? "-4px" : "-2px")};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: ${({ login }) => (login ? "-4px" : "-5px")};
    left: 0px;
    border-left: 5px solid #6f6f6f;
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    width: 0px;
    height: 0px;

    @media only screen and (max-width: 1024px) {
      bottom: ${({ login }) => (login ? "-4px" : "-3px")};
      border-left:${({ login }) => (login ? "5px solid #6f6f6f" : "3px solid #6f6f6f")};
      border-bottom: ${({ login }) => (login ? "5px solid transparent" : "3px solid transparent")};
      border-right: ${({ login }) => (login ? "5px solid transparent" : "3px solid transparent")};
    }
  }
`;

export const Div3 = styled.span<IPropsLetter>`
  position: absolute;
  width: ${({ login }) => (login ? "4px" : "5px")};
  height: 7px;
  background-color: #6f6f6f;
  top: 0px;
  right: ${({ login }) => (login ? "-4px" : "-5px")};
  rotate: 180deg;

  @media only screen and (max-width: 1024px) {
    right: ${({ login }) => (login ? "-4px" : "-2px")};
    height: ${({ login }) => (login ? "7px" : "2.5px")};
    width:${({ login }) => (login ? "4px" : "2.5px")};
    top:${({ login }) => (login ? "0px" : "0px")};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: ${({ login }) => (login ? "-4.5px" : "-5px")};
    left: 0px;
    border-left: 5px solid #6f6f6f;
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    width: 0px;
    height: 0px;
    @media only screen and (max-width: 1024px) {
      bottom: ${({ login }) => (login ? "-4.5px" : "-2px")};
      border-left:${({ login }) => (login ? "5px solid #6f6f6f" : "3px solid #6f6f6f")};
      border-bottom: ${({ login }) => (login ? "5px solid transparent" : "3px solid transparent")};
      border-right: ${({ login }) => (login ? "5px solid transparent" : "3px solid transparent")};
    }
  }
`;
