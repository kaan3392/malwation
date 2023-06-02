import styled from "styled-components";

export const ActiveItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface ActiveButtonProps {
  active: boolean;
}

export const Label = styled.label<ActiveButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 35px;
  height: 18px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;

  span {
    content: "";
    position: absolute;
    top: 2px;
    right: 2px;
    width: 14px;
    height: 14px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
`;

export const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;
