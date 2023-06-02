import styled from "styled-components";

export interface IPropsLogo {
  login?: boolean;
}


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;


`


export const Title = styled.h1<IPropsLogo>`
  font-size: ${({ login }) => (login ? "35px" : "28px")};
  letter-spacing: 4px;
  font-weight: 500;
  color:gray;
  @media only screen and (max-width: 768px) {
    font-size: ${({ login }) => (login ? "35px" : "18px")};
    letter-spacing:${({ login }) => (login ? "4px" : "2px")};
  }
`;