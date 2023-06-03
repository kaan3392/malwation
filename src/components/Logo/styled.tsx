import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export interface IPropsLogo {
  login?: boolean;
}

export const Title = styled.h1<IPropsLogo>`
  font-size: ${({ login }) => (login ? "35px" : "28px")};
  letter-spacing: 4px;
  font-weight: 500;
  color: gray;
  @media only screen and (max-width: 1024px) {
    font-size: ${({ login }) => (login ? "35px" : "18px")};
    letter-spacing: ${({ login }) => (login ? "4px" : "2px")};
  }
`;
