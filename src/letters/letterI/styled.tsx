import styled from "styled-components";

export const LetterI = styled.span`
  font-size: 28px;
  font-weight: 600;
  position: relative;
  color: gray;
  text-align: center;
  margin-left: -4px;

  &:after {
    content: "";
    position: absolute;
    bottom: 6px;
    left: 2px;
    border-bottom: 5px solid white;
    border-left: 5px solid transparent;
    border-top: 5px solid transparent;
    width: 0px;
    height: 0px;
  }
`;
