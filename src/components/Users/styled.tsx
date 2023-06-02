import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const Wrapper = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  flex-direction: column;
  gap: 40px;
@media only screen and (max-width: 768px) {
   width:95%;
   gap: 20px;
   height: 90%;
  }

`;


export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const InputAndFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const FilterContainer = styled.div`
  padding: 5px 15px;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  cursor: pointer;
  height: 40px;
  @media only screen and (max-width: 768px) {
    height: 30px;
  }

  svg {
    width: 20px;
    fill: gray;
  }
`;

export const FilteredUsersContainer = styled.div`
  position: absolute;
  background-color: white;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  width: 45%;
  max-height: 200px;
  overflow-y: auto;
  z-index: 2;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media only screen and (max-width: 768px) {
    top: 30px;

  }
`;

export const FilteredUsersWrapper = styled.div`
  padding: 10px;
  @media only screen and (max-width: 768px) {
    padding: 5px;
  }
`;
export const FilteredUserItem = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  @media only screen and (max-width: 768px) {
    padding: 5px;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;
