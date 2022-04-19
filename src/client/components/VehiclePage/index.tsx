import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import vehicles from "../../../vehicles.json";
import { SyledTitle } from "../GlobalStyledComponents/index";
import {
  StyledProductPageTopText,
  StyledProductPageBody,
  StyledVehicleDetailsDiv,
  StyledProductGalleryDiv,
  StyledVehicleTextDiv,
  StyledCheckoutBtnDiv,
  StyledMainPhoto,
  StyledMainPhotoContainer,
  StyledOtherPhotosContainer,
  StyledVehiclePriceText,
  StyledVehicleDescriptionText,
  StyledCheckoutButton,
  StyledOtherPhotos,
} from "./ProductPageStyledComponents/index";

const VehiclePage = () => {
  const [product, setProduct] = useState<any>([]);
  const { key } = useParams();
  const [selectedImg, setSelectedImg] = useState(1);

  useEffect(() => {
    if (key !== "") {
      const currentProduct = Object.entries(vehicles).filter(
        ([keyToFind, value]) => keyToFind === key
      );
      setProduct(currentProduct);
    }
  }, [key]);

  if (product.length === 0) {
    return <h1>Loading...</h1>;
  }

  let vehicleAngleImages: any[] = [];

  for (let i = 1; i < product[0][1].img.length; i++) {
    vehicleAngleImages.push(i);
  }

  let vehicleAngleImagesList: any[] = [];

  vehicleAngleImages.forEach((item, index) => {
    vehicleAngleImagesList.push(
      <StyledOtherPhotos alt="xisde" src={product[0][1].img[index+1]} onClick={() => setSelectedImg(index + 1)}></StyledOtherPhotos>
    )
  })


  return (
    <>
      {product.map(([key, value]: any) => {
        return (
          <StyledProductPageBody>
            <StyledProductPageTopText>
              {value.category[0]} &#62; {value.category[1]} &#62;{" "}
              {value.category[2]}
            </StyledProductPageTopText>

            <SyledTitle>{value.name}</SyledTitle>
            <StyledVehicleDetailsDiv>
              <StyledProductGalleryDiv>
                <StyledMainPhotoContainer>
                  <StyledMainPhoto
                    alt="foto ganda fixe"
                    src={value.img[selectedImg]}
                  ></StyledMainPhoto>
                </StyledMainPhotoContainer>
                <StyledOtherPhotosContainer>
                  {vehicleAngleImagesList}
                </StyledOtherPhotosContainer>
              </StyledProductGalleryDiv>

              <StyledVehicleTextDiv>
                <StyledVehiclePriceText>
                  {value.price
                    .toLocaleString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  €
                </StyledVehiclePriceText>
                <StyledVehicleDescriptionText>
                  {value.description}
                </StyledVehicleDescriptionText>
              </StyledVehicleTextDiv>

              <StyledCheckoutBtnDiv>
                <StyledCheckoutButton>Checkout</StyledCheckoutButton>
              </StyledCheckoutBtnDiv>
            </StyledVehicleDetailsDiv>
          </StyledProductPageBody>
        );
      })}
    </>
  );
};

export default VehiclePage;
