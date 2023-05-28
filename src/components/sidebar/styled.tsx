import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background-color: #fff;
  border-right: 1px solid lightgray;
  color:gray;
`;



export const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
`;
export const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  letter-spacing: 4px;
  font-weight: 500;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #c9c9c9;

  svg {
    width: 20px;
    fill: lightgray;
    margin-right: 10px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  width: 80%;
  &::placeholder {
    font-size: 16px;
    color: lightgray;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
`;

export const ListItem = styled.li`
  padding: 10px 7px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;
  &:hover {
    background-color: #f5f5f5;
  }
  svg {
    width: 18px;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const InformationContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border-top: 1px solid lightgray;
padding-top: 10px;
`;

export const Information = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export const Name = styled.div`
font-weight: 500;
`;

export const Email = styled.div`
font-size:14px;
`;

export const Logout = styled.div`
svg{
  width: 20px;
  fill: red;
  cursor: pointer;
}

`;

