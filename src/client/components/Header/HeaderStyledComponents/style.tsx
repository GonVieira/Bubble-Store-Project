import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  padding: 20px;
  font-size: 26px;

  &:hover {
    color: #27d1f4;
  }
`;

export const StyledHeaderContentDiv = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #ffef00;
  padding: 4px;
`;

export const StyledContentTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledContentTabsTop = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #27d1f4;
  padding: 5px;
  border-radius: 5px;
`;

export const StyledHeaderImg = styled.img`
  width: 100px;
  height: 100px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

export const StyledHeaderMainTitle = styled.h1`
  color: #000000;
  justify-content: center;
  align-items: center;
  font-size: 45px;
`;

export const StyledHeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius:25%;
  background-color: #27d1f4;
  width: 7%;
  height: 70%;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;

export const StyledSvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;