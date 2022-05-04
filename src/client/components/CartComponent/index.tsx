import React, { useContext, useState, useEffect } from "react";
import { GlobalContextCart } from "../../../context/Context";
import CartItemComponent from "../CartItemComponent/index";
import {
  StyledCartContainer,
  StyledCartHead,
  StyledCartBody,
  StyledCartFooter,
  StyledCloseBtnContainer,
  StyledCloseCartBtn,
  StyledPriceContainer,
  StyledTotalDiv,
  StyledPriceText,
  StyledCheckoutButton,
} from "./StyledComponents/style";

const CartComponent = ({ active, setActive }: any) => {
  const { cart, setCart } = useContext(GlobalContextCart);
  const [itemsTotalPrice, setItemsTotalPrice] = useState(0);
  const cartArray = Object.entries(cart);

  useEffect(() => {
    let priceCalc = 0;
    cartArray.map(([key, value]: any) => {
      priceCalc = priceCalc + value[1].price;
    });
    console.log(priceCalc);
    setItemsTotalPrice(priceCalc);
  }, [cartArray]);

  return (
    <StyledCartContainer>
      <StyledCartHead>
        <StyledCloseBtnContainer>
          <StyledCloseCartBtn onClick={() => setActive(false)}>
            X
          </StyledCloseCartBtn>
        </StyledCloseBtnContainer>
      </StyledCartHead>

      <StyledCartBody>
        {cartArray.map(([key, value]: any) => {
          console.log(value);
          return (
            <CartItemComponent
              img={value[1].img}
              name={value[1].name}
              price={value[1].price}
            />
          );
        })}
      </StyledCartBody>

      <StyledTotalDiv>
        <StyledPriceContainer>
          <StyledPriceText>
            TOTAL &nbsp; &nbsp;
             {itemsTotalPrice
              .toLocaleString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            €
          </StyledPriceText>
        </StyledPriceContainer>
      </StyledTotalDiv>
      <StyledCartFooter>
        <StyledPriceContainer>
          <StyledCheckoutButton>Checkout!</StyledCheckoutButton>
        </StyledPriceContainer>
      </StyledCartFooter>
    </StyledCartContainer>
  );
};

export default CartComponent;
