import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 50vw;
  border-collapse: collapse;
  overflow: auto;
`;

export const TableHead = styled.thead`
  background-color: #dfe2e6;
  width: 100%;
`;

export const TableBody = styled.tbody`
  background-color: #fff;
  width: 100%;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  width: 100%;

  svg {
    width: 15px;
    fill: tomato;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
    width: 12px;
  }
    &:hover {
      fill: red;
    }
  }

  &:hover {
    background-color: lightgray;
  }

  &:nth-child(2n) {
    background-color: #f2f2f2;

    &:hover {
      background-color: lightgray;
    }
  }
`;

export const TableHeadData = styled.th`
  padding: 12px;
  text-align: left;
  @media only screen and (max-width: 768px) {
    padding: 8px;
  }
`;

export interface IPropsTableData {
  roleOfUser?: boolean;
}

export const TableData = styled.td<IPropsTableData>`
  padding: 12px;
  text-align: left;
  text-transform: ${(props) => (props.roleOfUser ? "capitalize" : "none")};
@media only screen and (max-width: 768px) {
    padding: 6px;
  }
  
`;

export interface IPropsCircle {
  active?: boolean;
}

export const Circle = styled.div<IPropsCircle>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "limegreen" : "red")};
@media only screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
  }

`;
