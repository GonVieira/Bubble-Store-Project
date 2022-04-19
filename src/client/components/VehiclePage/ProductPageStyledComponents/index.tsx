import styled from "styled-components";

export const StyledProductPageTopText = styled.h2 `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #ff003c;
    padding: 5px;
`

export const StyledProductPageBody = styled.body `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`

export const StyledVehicleDetailsDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    margin-top: 20px;
`
//GALLERY
export const StyledProductGalleryDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding:10px;
    width: 40%;
`

export const StyledMainPhotoContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
`

export const StyledMainPhoto = styled.img `
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const StyledOtherPhotosContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

export const StyledOtherPhotos = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    width: 32%;
    height: 25%;

    &:hover {
        box-shadow: 1px solid #F3E600;
    }
`


//TEXT
export const StyledVehicleTextDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    width: 40%;
    height: 100%;
`

export const StyledVehiclePriceText = styled.h2 `
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FF003C;
    font-size: 26px;
`

export const StyledVehicleDescriptionText = styled.p `
    display: flex;
    justify-content: center;
    align-items: center;
    color: #04DAF6;
    font-size: 20px;
    white-space: pre-line;
    padding: 10px;
    line-height: 25px;
`


//BUTTON
export const StyledCheckoutBtnDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
`

export const StyledCheckoutButton = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
`