import React, {useState} from "react";
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
import CartComponent from "../CartComponent/index";

const Header = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <StyledHeaderContentDiv>
        <StyledContentTabsTop>
          <StyledLink to="/">
            <StyledHeaderImg src="https://cdn.discordapp.com/attachments/832239784244150292/964552477112401990/Cyberpunk_2077_favicon.png" />
          </StyledLink>
          <StyledHeaderMainTitle>BUBBLE STORE</StyledHeaderMainTitle>
          <StyledHeaderButton>
            <AiOutlineShoppingCart color="#ffef00" size="4rem"
            onClick={() => setActive(active ? false : true)}/>
          </StyledHeaderButton>
        </StyledContentTabsTop>
        <StyledContentTabs>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/vehicles">All</StyledLink>
          <StyledLink to="/vehicles/car">Cars</StyledLink>
          <StyledLink to="/vehicles/motorcycle">Motorcycles</StyledLink>
        </StyledContentTabs>
      </StyledHeaderContentDiv>
    </>
  );
};

export default Header;
