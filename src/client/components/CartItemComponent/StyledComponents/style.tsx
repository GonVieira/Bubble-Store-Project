import styled from "styled-components";

export const StyledCartItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #ffef00;
    height: 10%;
    margin: 5px;
`

export const StyledItemImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 100%;
`

export const StyledItemImg = styled.img`
    height: auto;
    max-width: 100%;
    padding: 2px;
`

export const StyledItemNameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 100%;
    margin-left: 20px;
`   

export const StyledItemName = styled.p`
    font-size: 15px;
    padding: 2px;
`

export const StyledItemPriceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 100%;
`

export const StyledItemPrice = styled.p`
    font-size: 15px;
    padding: 2px;
`