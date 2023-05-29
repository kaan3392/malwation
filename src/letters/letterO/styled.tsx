import styled from "styled-components";

export const Div1 = styled.span`
  
  width: 20px;
  height: 20px;
  background-color: inherit;
  border: 5px solid black;
  position: relative;
  border-inline-color: lightgray;
  border-block-color: #999999;
  display: inline-block;
  margin:0px 5px;

  &:before {
    content: "+";
    position: absolute;
    top:0;
    left:4px;
    right:0;
    bottom:0;
    font-size:50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }
`;

export const Div2 = styled.span`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #6f6f6f;
  left: -5px;
  bottom: 0;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    border-left: 5px solid #6f6f6f;
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    width: 0px;
    height: 0px;
  }
`;

export const Div3 = styled.span`
  position: absolute;
  width: 5px;
  height: 7px;
  background-color: #6f6f6f;
  top: 0px;
  right: -5px;
  rotate: 180deg;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0px;
    border-left: 5px solid #6f6f6f;
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    width: 0px;
    height: 0px;
  }
`;
