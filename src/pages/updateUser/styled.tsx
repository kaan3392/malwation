import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  flex: 10;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4f5e77;
`;

export const Wrapper = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Back = styled(Link)`
  color: gray;
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    width: 20px;
    fill: #4f5e77;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

export const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ActiveContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 500;

  span {
    font-size: 15px;
  }
`;

export const ActiveButton = styled.div`
  border: none;
  outline: none;
  background-color: limegreen;
  width: 35px;
  height: 18px;
  border-radius: 10px;
  position: relative;
  font-weight: 500;
  div {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    right: 3px;
    top: 2px;
  }
`;
