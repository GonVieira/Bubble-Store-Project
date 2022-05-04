import styled from "styled-components";

export const StyledCartContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #000000;
  width: 20%;
  right: 0px;
  bottom: 0px;
  height: 100vh;
  padding: 5px;
  z-index: 4;
`;

export const StyledCartHead = styled.head`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #04daf6;
  width: 100%;
  padding: 10px;
`;

export const StyledCartBody = styled.body`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #312e2e;
  width: 100%;
  padding: 10px;
`;

export const StyledCartFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #04daf6;
  width: 100%;
  padding: 10px;
`;

export const StyledCloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
`;
export const StyledCloseCartBtn = styled.button`
  background-color: #04daf6;
  border: none;
  text-decoration: none;
  color: #000000;
  padding: 5px;
  font-size: 30px;
  font-family: cyberpunk;
  text-shadow: 3px 3px 1px #ffef00;

  &:hover {
    text-shadow: 3px 3px 1px #ff003c;
  }
`;

export const StyledTotalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #000000;
`

export const StyledPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledPriceText = styled.div`
  font-size: 20px;
  font-weight: bold; 
  color: #F3E600;
`

export const StyledCheckoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
  height: 90%;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  color: #000000;
  border: 2px solid rgba(0, 0, 0, 0.0);
  background-color: #F3E600;
  transition: 0.3s ease;

  &:hover {
    border: 2px solid #000000;
    box-shadow: 3px 3px #000000;
  }
`