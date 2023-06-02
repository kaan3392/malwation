import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
`;

export const Boxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface BoxProps {
  active?: boolean;
}

export const Box = styled.div<BoxProps>`
  width: 30px;
  height: 30px;
  border: 1px solid gray;
  border-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ active }) => active && "lightgray"};
  &:first-child {
    border-left: 1px solid gray;
    font-weight: 500;
  }

  &:last-child {
    font-weight: 500;
  }

  &:hover {
    background-color: #eaeaea;
  }
`;
