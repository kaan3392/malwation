import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Wrapper = styled.div`
  width: 25%;
  min-width: 500px;
  height: 55%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    min-width: 300px;
  }
`;

export type SubtitleProps = {
  bold?: boolean;
};

export const Subtitle = styled.h2<SubtitleProps>`
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: ${(props) => (props.bold ? "35px" : "18px")};
  letter-spacing: ${(props) => (props.bold ? "2px" : "0px")};
  color: #5e6c83;
  text-align: center;
`;

export const Form = styled.form`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Forgot = styled(Link)`
  color: #2e7bf8;
  font-size: 15px;
  margin-bottom: 10px;
  align-self: flex-start;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const Account = styled.div`
  color: gray;
  font-weight: 500;
`;

export const Register = styled(Link)`
  color: #2e7bf8;
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
  
`;
