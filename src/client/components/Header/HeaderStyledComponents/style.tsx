import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  padding: 20px;
  font-size: 26px;
  font-family: cyberpunk;
  text-shadow: 3px 3px 1px #ffef00;

  &:hover {
    text-shadow: 3px 3px 1px #FF003C;
  }
`;

export const StyledHeaderContentDiv = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #04DAF6;
  padding: 4px;
  width: 100%;
`;

export const StyledContentTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledContentTabsTop = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  padding: 5px;
  border-radius: 5px;
`;

export const StyledHeaderImg = styled.img`
  width: 95px;
  height: 85px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledHeaderMainTitle = styled.h1`
  color: #ffef00;
  font-family: cyberpunk;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  text-shadow: 1px 1px #04daf6, 4px 4px 1px rgb(90, 88, 85);
`;

export const StyledHeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 25%;
  background-color: #000000;
  width: 5%;
  height: 70%;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #FF003C;
  }
`;

export const StyledSvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
