import styled from "styled-components";
import { IPropsCircle, IPropsTableData } from "./types";

export const Container = styled.div`
  width: 100%;
  /* min-height: 450px; */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 50vw;
  border-collapse: collapse;
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
  cursor: pointer;

  svg {
    width: 15px;
    fill: tomato;
    cursor: pointer;
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
`;

export const TableData = styled.td<IPropsTableData>`
  padding: 12px;
  text-align: left;
  text-transform: ${(props) => (props.roleOfUser ? "capitalize" : "none")};
`;

export const Circle = styled.div<IPropsCircle>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "limegreen" : "red")};
`;
