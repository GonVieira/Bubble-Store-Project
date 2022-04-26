import styled from "styled-components";

export const StyledFilterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 7%;
  height: 450px;
  padding: 5px;
  margin-left: 20px;
`;

export const StyledFilterComponentTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #000000;
`
export const StyledFilterComponentTitle = styled.h1`
  text-decoration: none;
  color: #000000;
  padding: 20px;
  font-size: 26px;
  font-family: cyberpunk;
  text-shadow: 3px 3px 1px #ffef00;
`

export const StyledfilterButton = styled.button`
  padding: 5px;
  width: 100%;
  height: 10%;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  color: #000000;
  border: 2px solid rgba(0, 0, 0, 0);
  background-color: #f3e600;
  transition: 0.3s ease;

  &:hover {
    border: 2px solid #ff003c;
    box-shadow: 3px 3px #ff003c;
  }
`;

export const StyledFilterDivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #04daf6;
  width: 18%;
  top: 0;
  bottom: 0;
  padding: 10px;
  align-self: center;
`;

export const StyledTextFieldDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 5px;
`;

export const StyledInput = styled.input`
  text-align: center;
  width: 100%;
  height: 10%;
  font-size: 16px;
`;

export const StyledFilterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 5px;
`;

export const StyledFilterCategoryText = styled.h2`
  font-size: 16px;
  width: 50%;
  text-align: center;
`;
//SORT
export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 5px;
`;

export const StyledButton = styled.button`
  text-align: center;
  width: 100%;
  padding: 1px;
  cursor: pointer;
  border: none;
  font-size: 12px;
`;

//DROPRIGHT
export const DropRightDiv = styled.div`
  position: relative;
  display: inline-block;
  width: 90%;
  left: 100%;
  top: 0%;
  margin-left: 0px;
  height: 100%;
`;

export const StyledDropRightOptionsContainer = styled.ul`
  position: absolute;
  width: 100%;
  background-color: yellow;
  z-index: 1;
  left: 100%;
  top: 0px;
`;

export const StyledDropRightOption = styled.li`
  width: 100%;
  text-align: center;
  list-style: none;
  display: block;
  padding: 5px;
  border-radius: 5px;
  font-size: 10px;
  cursor: pointer;

  &:hover {
    background-color: #04daf6;
  }
`;

//DROPDOWN
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
  font-size: 10px;
  cursor: pointer;

  &:hover {
    background-color: #04daf6;
  }
`;

export const StyledFilterDropdown = styled.button`
  text-align: center;
`;
