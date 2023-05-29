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
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

export const InputAndFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  svg {
    width: 20px;
    fill: gray;
  }
`;
