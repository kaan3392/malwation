import styled from "styled-components";

export const WLetter = styled.span`
  font-size: 28px;
  font-weight: 600;
  position: relative;
  color: gray;

  &:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 10px;
    width: 2px;
    height: 15px;
    background-color: white;
    transform: rotate(166deg);
  }
`;
