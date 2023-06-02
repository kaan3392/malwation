import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 400px;
  min-width: 800px;
  border-radius: 10px;
  position: relative;
`;

export const Wrapper = styled.div`
  padding: 5px;
  min-width: 500px;
  overflow: hidden;
  overflow-x: auto;

`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;  
  `;

export const TableHead = styled.thead`
  background-color: #dfe2e6;
  width: 100%;
  display: flex;
`;

export const TableHeadData = styled.th`
  padding: 12px;
  text-align: left;
  height: 40px;

  &:nth-child(1) {
    flex: 2;
  }
  &:nth-child(2) {
    flex: 5;
  }
  &:nth-child(3) {
    flex: 3;
  }
  &:nth-child(4) {
    flex: 1;
  }
  &:nth-child(5) {
    flex: 1;
  }
  &:nth-child(6) {
    flex: 0.5;
  }
  &:nth-child(7) {
    flex: 0.5;
  }

  @media only screen and (max-width: 768px) {
    padding: 8px;
  }
`;

export const TableBody = styled.tbody`
  background-color: #fff;
  width: 100%;
`;

interface IPropsTableRow {
  headRow?: boolean;
}

export const TableRow = styled.tr<IPropsTableRow>`
  border-bottom: 1px solid #ddd;
  width: 100%;
  display: flex;

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
    background-color: ${(props) => !props.headRow && "lightgray"};
  }

  &:nth-child(2n) {
    background-color: #f2f2f2;

    &:hover {
      background-color: lightgray;
    }
  }
`;

export interface IPropsTableData {
  roleOfUser?: boolean;
}

export const TableData = styled.td<IPropsTableData>`
  padding: 12px;
  text-align: left;
  text-transform: ${(props) => (props.roleOfUser ? "capitalize" : "none")};
  height: 40px;
  &:nth-child(1) {
    flex: 2;
  }
  &:nth-child(2) {
    flex: 5;
  }
  &:nth-child(3) {
    flex: 3;
  }
  &:nth-child(4) {
    flex: 1;
  }
  &:nth-child(5) {
    flex: 1;
  }
  &:nth-child(6) {
    flex: 0.5;
  }
  &:nth-child(7) {
    flex: 0.5;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
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
