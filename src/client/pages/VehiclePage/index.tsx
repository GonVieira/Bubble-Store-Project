import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import vehicles from "../../../vehicles.json";
import { SyledTitle } from "../../components/GlobalStyledComponents/index";
import { GlobalContextCart } from "../../../context/Context";
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
import {
  StyledBedCrumDiv,
  StyledBedCrumAnchor,
  StyledBedCrumArrow,
} from "../../components/GlobalStyledComponents/index";

type obj = {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string[];
  category: {};
};

const VehiclePage = () => {
  const [product, setProduct] = useState<any>([]);
  const { key } = useParams();
  const [selectedImg, setSelectedImg] = useState(1);
  const { category1, category2, category3 } = useParams();
  const { cart, setCart } = useContext(GlobalContextCart);
  const navigate = useNavigate();

  function handleClick() {
    setCart([...cart, product[0]]);
    window.alert("Product added to cart.");
  }

  console.log(cart);

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
      <StyledOtherPhotos
        alt="xisde"
        src={product[0][1].img[index + 1]}
        onClick={() => setSelectedImg(index + 1)}
      ></StyledOtherPhotos>
    );
  });

  //BEDCRUM
  const bedCrum = () => {
    console.log(category3);
    if (category3 !== undefined) {
      return (
        <>
          <StyledBedCrumAnchor onClick={() => navigate(``)}>
            Vehicles
          </StyledBedCrumAnchor>
          <StyledBedCrumArrow> &#8250;</StyledBedCrumArrow>
          <StyledBedCrumAnchor onClick={() => navigate(`${category1}`)}>
            {category1}
          </StyledBedCrumAnchor>
          <StyledBedCrumArrow> &#8250;</StyledBedCrumArrow>
          <StyledBedCrumAnchor
            onClick={() => navigate(`${category1}/${category2}`)}
          >
            {category2}
          </StyledBedCrumAnchor>
          <StyledBedCrumArrow> &#8250;</StyledBedCrumArrow>
          <StyledBedCrumAnchor>{category3}</StyledBedCrumAnchor>
        </>
      );
    }
    if (category2 !== undefined) {
      console.log(category2);
      return (
        <>
          <StyledBedCrumAnchor onClick={() => navigate(``)}>
            Vehicles
          </StyledBedCrumAnchor>
          <StyledBedCrumArrow> &#8250;</StyledBedCrumArrow>
          <StyledBedCrumAnchor onClick={() => navigate(`${category1}`)}>
            {category1}
          </StyledBedCrumAnchor>
          <StyledBedCrumArrow> &#8250;</StyledBedCrumArrow>
          <StyledBedCrumAnchor>{category2}</StyledBedCrumAnchor>
        </>
      );
    }
    if (category1 !== undefined) {
      return (
        <>
          <StyledBedCrumAnchor onClick={() => navigate(``)}>
            Vehicles
          </StyledBedCrumAnchor>
          <StyledBedCrumArrow> &#8250;</StyledBedCrumArrow>
          <StyledBedCrumAnchor>{category1}</StyledBedCrumAnchor>
        </>
      );
    } else {
      return (
        <>
          <StyledBedCrumAnchor>Vehicles</StyledBedCrumAnchor>
        </>
      );
    }
  };

  return (
    <>
      <StyledBedCrumDiv>{bedCrum}</StyledBedCrumDiv>
      {product.map(([key, value]: any) => {
        return (
          <StyledProductPageBody>
            <StyledProductPageTopText>
              <StyledBedCrumAnchor onClick={() => navigate(`/vehicles`)}>
                Vehicles
              </StyledBedCrumAnchor>
              <StyledBedCrumArrow> &#8250;</StyledBedCrumArrow>
              <StyledBedCrumAnchor
                onClick={() =>
                  navigate(`/vehicles/${value.category[0].toLowerCase()}`)
                }
              >
                {value.category[0]}
              </StyledBedCrumAnchor>
              <StyledBedCrumArrow> &#8250;</StyledBedCrumArrow>
              <StyledBedCrumAnchor
                onClick={() =>
                  navigate(
                    `/vehicles/${value.category[0].toLowerCase()}/${value.category[1].toLowerCase()}`
                  )
                }
              >
                {value.category[1]}
              </StyledBedCrumAnchor>
              <StyledBedCrumArrow> &#8250;</StyledBedCrumArrow>
              <StyledBedCrumAnchor
                onClick={() =>
                  navigate(
                    `/vehicles/${value.category[0].toLowerCase()}/${value.category[1].toLowerCase()}/${value.category[2].toLowerCase()}`
                  )
                }
              >
                {value.category[2]}
              </StyledBedCrumAnchor>
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
                <StyledCheckoutBtnDiv>
                  <StyledCheckoutButton onClick={() => handleClick()}>
                    Add to cart!
                  </StyledCheckoutButton>
                </StyledCheckoutBtnDiv>
              </StyledVehicleTextDiv>
            </StyledVehicleDetailsDiv>
          </StyledProductPageBody>
        );
      })}
    </>
  );
};

export default VehiclePage;
