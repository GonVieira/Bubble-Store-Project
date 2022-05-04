import React, { useContext } from "react";
import { GlobalContextCart } from "../../../context/Context";
import {StyledQuantityContainer, StyledQuantityText} from "./StyledComponents/style";

const CartQuantity = () => {
    const { cart, setCart } = useContext(GlobalContextCart);
    
    return (
        <StyledQuantityContainer>
            <StyledQuantityText>{cart.length}</StyledQuantityText>
        </StyledQuantityContainer>
    );
}

export default CartQuantity;