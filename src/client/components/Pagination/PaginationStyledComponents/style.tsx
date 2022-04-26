import styled from "styled-components";


export const SyledPaginationDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%
`
export const StyledPagButton = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border:none;
    background: none;
    color: #FF003C;
    cursor: pointer;

    &:hover {
        color: #04DAF6;
    }
` 

export const StyledNumberText = styled.p `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 0px 5px;
    color: #FF003C;
`