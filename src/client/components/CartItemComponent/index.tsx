import React from "react";
import {
  StyledCartItemContainer,
  StyledItemImgContainer,
  StyledItemNameContainer,
  StyledItemPriceContainer,
  StyledItemImg,
  StyledItemName,
  StyledItemPrice,
} from "./StyledComponents/style";

const CartItemComponent = ({ img, name, price }: any) => {
  return (
    <StyledCartItemContainer>
      <StyledItemImgContainer>
        <StyledItemImg alt="foto ganda fixe" src={img} />
      </StyledItemImgContainer>

      <StyledItemNameContainer>
        <StyledItemName>{name}</StyledItemName>
      </StyledItemNameContainer>

      <StyledItemPriceContainer>
        <StyledItemPrice>
          {price.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} €
        </StyledItemPrice>
      </StyledItemPriceContainer>
    </StyledCartItemContainer>
  );
};

export default CartItemComponent;
