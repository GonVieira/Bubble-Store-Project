import React from "react";
import {
  StyledLink,
  StyledHeaderContentDiv,
  StyledContentTabs,
  StyledContentTabsTop,
  StyledHeaderImg,
  StyledHeaderMainTitle,
  StyledHeaderButton,
} from "./HeaderStyledComponents/style";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <StyledHeaderContentDiv>
        <StyledContentTabsTop>
          <StyledLink to="/">
            <StyledHeaderImg src="https://cdn.discordapp.com/attachments/832239784244150292/964552477112401990/Cyberpunk_2077_favicon.png" />
          </StyledLink>
          <StyledHeaderMainTitle>BUBBLE STORE</StyledHeaderMainTitle>
          <StyledHeaderButton>
            <AiOutlineShoppingCart color="#ffef00" size="4rem" />
          </StyledHeaderButton>
        </StyledContentTabsTop>
        <StyledContentTabs>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/vehicles">All</StyledLink>
          <StyledLink to="/cars">Cars</StyledLink>
          <StyledLink to="/motorcycles">Motorcycles</StyledLink>
        </StyledContentTabs>
      </StyledHeaderContentDiv>
    </>
  );
};

export default Header;
