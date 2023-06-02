import styled from "styled-components";

export interface IPropsLogo {
  login?: boolean;
}


export const Title = styled.h1<IPropsLogo>`
  font-size: ${({ login }) => (login ? "35px" : "28px")};
  letter-spacing: 4px;
  font-weight: 500;
  color:gray;
`;