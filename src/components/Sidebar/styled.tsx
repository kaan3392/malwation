import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  background-color: #fff;
  border-right: 1px solid lightgray;
  color: gray;
`;

export const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  @media only screen and (max-width: 768px) {
    gap: 10px;
    margin-top: 10px;
  }
`;

export const ListItem = styled(NavLink)`
  padding: 10px 7px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    gap: 15px;
  }
  &:hover {
    background-color: #f5f5f5;
  }

  &.active {
    background-color: #eaeaea;
  }
  svg {
    width: 18px;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid lightgray;
  padding-top: 10px;
  gap: 10px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    gap: 5px;
  }
`;

export const Name = styled.div`
  font-weight: 500;
`;

export const Email = styled.div`
  font-size: 14px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Logout = styled.div`
  svg {
    width: 20px;
    fill: red;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
    width: 18px;
  }
  }
`;
