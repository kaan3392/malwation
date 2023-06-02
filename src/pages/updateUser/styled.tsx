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
  @media only screen and (max-width: 768px) {
    width: 90%;

  }
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
  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;



