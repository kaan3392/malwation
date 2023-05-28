import styled from "styled-components";
import { Link } from "react-router-dom";
import { SubtitleProps } from "./types";

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
`;

export const Title = styled.h1`
  color: #b5b5b5;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;

`;

export const Subtitle = styled.p<SubtitleProps>`
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

export const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.label`
  color: #5e6c83;
  font-size: 15px;
  align-self: flex-start;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid lightgray;
  border-radius: 10px;
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

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #2e7bf8;
  border: 1px solid #2e7bf8;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: inherit;
    color: #2e7bf8;
    border: 1px solid #2e7bf8;
  }
`;

export const Forgot = styled(Link)`
  color: #2e7bf8;
  font-size: 15px;
  margin-bottom: 10px;
  align-self: flex-start;
  font-weight: bold;
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
`;
