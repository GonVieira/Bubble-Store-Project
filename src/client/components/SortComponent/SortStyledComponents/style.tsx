import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
`;

export const StyledButton = styled.button`
  text-align: center;
  width: 100%;
  padding: 1px;
  cursor: pointer;
  border: none;
  font-size: 18px;
`;

export const StyledFilterCategoryText = styled.h2`
  font-size: 20px;
  width: 50%;
  text-align: center;
`;

export const StyledDropdownDiv = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
`;

export const StyledDropdownOptionsContainer = styled.ul`
  position: absolute;
  width: 100%;
  background-color: yellow;
  z-index: 1;
  padding: 1px;
`;

export const StyledDropdownOption = styled.li`
  width: 100%;
  text-align: center;
  list-style: none;
  display: block;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #04daf6;
  }
`;