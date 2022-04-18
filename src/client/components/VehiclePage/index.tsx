import React, { useState, useEffect } from "react";
import { StyledProductPageTopText } from "./ProductPageStyledComponents/index";
import { useParams } from "react-router-dom";
import vehicles from "../../../vehicles.json";

const VehiclePage = () => {
  const [product, setProduct] = useState<any>(
    useEffect(() => {
      if (key !== "") {
        const currentProduct = Object.entries(vehicles).filter(
          ([keyToFind, value]) => keyToFind === key
        );
        setProduct(currentProduct);
      }
    }, [])
  );
  const { key } = useParams();

  console.log(product);

  return (
    <>
     {/** 
      {product.map(([key, value]: any) => {
        return <p>{value.name}</p>;
      })}

      <StyledProductPageTopText>{product[0][1].name}</StyledProductPageTopText>
      */}
    </>
  );
};

export default VehiclePage;
