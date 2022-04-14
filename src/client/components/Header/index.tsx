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
            <StyledHeaderImg src="https://media-exp1.licdn.com/dms/image/C4D12AQGb8jQRsmTXFg/article-cover_image-shrink_720_1280/0/1525880169356?e=1652918400&v=beta&t=caRknVNjPSaYUWiSf1ls4Qz2SXBbgdlsCd-aVtXZ658" />
          </StyledLink>
          <StyledHeaderMainTitle>BUBBLE STORE</StyledHeaderMainTitle>
          <StyledHeaderButton>
            <AiOutlineShoppingCart size="4rem" />
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
