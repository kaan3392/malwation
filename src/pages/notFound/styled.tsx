import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Not = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

export const Number = styled.h2`
  font-size: 100px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

export const GoBack = styled(Link)`

    font-size: 20px;
    font-weight: bold;
    color: #000;
    text-decoration: none;
    border: 1px solid #000;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #000;
        color: #fff;
    }
    


`;

