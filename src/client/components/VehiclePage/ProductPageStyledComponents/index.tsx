import styled from "styled-components";

export const StyledProductPageTopText = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #ff003c;
  padding: 5px;
`;

export const StyledProductPageBody = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const StyledVehicleDetailsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  margin-top: 20px;
`;

//GALLERY
export const StyledProductGalleryDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 36%;
`;

export const StyledMainPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

export const StyledMainPhoto = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const StyledOtherPhotosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const StyledOtherPhotos = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border: 1px solid #000000;
  width: 32%;
  height: 25%;

  &:hover {
    border: 1px solid #F3E600;
  }
`;

//TEXT
export const StyledVehicleTextDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  width: 40%;
  height: fit-content;
  margin-bottom: 120px;
`;

export const StyledVehiclePriceText = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  color: #ff003c;
  font-size: 34px;
`;

export const StyledVehicleDescriptionText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  white-space: pre-line;
  padding: 10px;
  line-height: 25px;
`;

//BUTTON
export const StyledCheckoutBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 10px;
  height: 100%;
  margin-top: 20px;
`;

export const StyledCheckoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 70%;
  height: 90%;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  color: #000000;
  border: 2px solid rgba(0, 0, 0, 0.0);
  background-color: #F3E600;
  transition: 0.3s ease;

  &:hover {
    border: 2px solid #04DAF6;
    box-shadow: 3px 3px #04DAF6;
  }
`;
