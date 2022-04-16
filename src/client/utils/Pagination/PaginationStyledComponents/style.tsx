import styled from "styled-components";


export const SyledPaginationDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
export const StyledPagButton = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border:none;
    background: none;
    padding: 0px;
    color: #FF003C;

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
