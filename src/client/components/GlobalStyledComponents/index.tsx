import styled from "styled-components";

export const SyledTitle = styled.h1`
  font-size: 50px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &:hover {
    border: 1px solid #ffef00;
  }
`;

export const StyledProductListBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  color: #f4f4f4;
  padding: 20px;
  width: 70%;
`;

export const StyledProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  width: 380px;
  height: 250px;
  
`;

export const StyledProductStatsComponent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 5px;
`;
