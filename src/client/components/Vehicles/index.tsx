import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vehicles from "../../../vehicles.json";
import {
  StyledImg,
  StyledProductListBody,
  StyledProductContainer,
  StyledProductStatsComponent,
  SyledTitle,
  StyledVehicleStatName,
  StyledVehicleStatPrice,
} from "../GlobalStyledComponents/index";
import Pagination from "../../utils/Pagination/index";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const navigate = useNavigate();

  //GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Object.entries(vehicles).slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <>
      <SyledTitle>Vehicles page</SyledTitle>
      <StyledProductListBody>
        {currentPosts.map(([key, value]: any) => {
          return (
            <StyledProductContainer
              onClick={() => navigate(`/vehicle/${key}`)}
            >
              <StyledImg alt="foto ganda fixe" src={value.img[0]} />
              <StyledProductStatsComponent>
                <StyledVehicleStatName>{value.name}</StyledVehicleStatName>
                <StyledVehicleStatPrice>
                  Price:{" "}
                  {value.price
                    .toLocaleString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  €
                </StyledVehicleStatPrice>
              </StyledProductStatsComponent>
            </StyledProductContainer>
          );
        })}
      </StyledProductListBody>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        postsPerPage={postsPerPage}
        totalPosts={Object.entries(vehicles).length}
      />
    </>
  );
};

export default Product;
