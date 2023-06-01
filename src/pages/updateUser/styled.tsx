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

interface ActiveButtonProps {
  active: boolean;
}

export const ActiveButton = styled.div<ActiveButtonProps>`
  border: none;
  outline: none;
  background-color: ${(props) => (props.active ? "limegreen" : "tomato")};
  width: 35px;
  height: 18px;
  border-radius: 10px;
  position: relative;
  font-weight: 500;
  transition: all 0.5s ease;
  div {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    right: ${(props) => (props.active ? "4px" : "18px")};
    top: 2px;
    transition: all 0.5s ease;
  }
`;


export const Select = styled.select`

  width: 100%;
  height: 40px;
  border: 2px solid lightgray;
  border-radius: 7px;
  padding: 5px 10px;
  font-size: 16px;
  color: #5e6c83;
  &::placeholder {
    color: lightgray;
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  color: #5e6c83;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
`;

