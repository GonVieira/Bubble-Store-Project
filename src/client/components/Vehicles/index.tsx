import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vehicles from "../../../vehicles.json";

import {
  StyledImg,
  StyledProductListBody,
  StyledProductContainer,
  StyledProductStatsComponent,
  StyledVehicleStatName,
  StyledVehicleStatPrice,
  StyledFilterContainer,
  StyledFilterAndCarsContainer,
  StyledFilterOptionButton,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
} from "../GlobalStyledComponents/index";
import Pagination from "../../utils/Pagination/index";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesArray, setVehiclesArray] = useState(Object.entries(vehicles));
  const [postsPerPage] = useState(6);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [sortType, setSortType] = useState("Default Sort");

  const toggling = () => setIsOpen(!isOpen);

  const orderByPriceAsc = () => {
    let sortedArray = vehiclesArray;

    sortedArray.sort((a, b) => {
      return a[1].price - b[1].price;
    });
    setVehiclesArray([...sortedArray]);
    setIsOpen(false);
    setSortType("Price Asc");
  };

  const orderByDesc = () => {
    let sortedArray = vehiclesArray;

    sortedArray.sort((a, b) => {
      return b[1].price - a[1].price;
    });
    setVehiclesArray([...sortedArray]);
    setIsOpen(false);
    setSortType("Price Desc");
  };

  const nameOrderByA = () => {
    let sortedArray = vehiclesArray;

    sortedArray.sort((a, b) => {
      return a[1].name.localeCompare(b[1].name);
    });
    setVehiclesArray([...sortedArray]);
    setIsOpen(false);
    setSortType("Name A-Z");
  };

  const nameOrderByZ = () => {
    let sortedArray = vehiclesArray;

    sortedArray.sort((a, b) => {
      return b[1].name.localeCompare(a[1].name);
    });
    setVehiclesArray([...sortedArray]);
    setIsOpen(false);
    setSortType("Name Z-A");
  };

  //GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = vehiclesArray.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>{sortType}</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <StyledFilterContainer>
                <StyledFilterOptionButton onClick={orderByPriceAsc}>
                  Price &#8593;
                </StyledFilterOptionButton>
                <StyledFilterOptionButton onClick={orderByDesc}>
                  Price &#8595;
                </StyledFilterOptionButton>
                <StyledFilterOptionButton onClick={nameOrderByA}>
                  Name A-Z
                </StyledFilterOptionButton>
                <StyledFilterOptionButton onClick={nameOrderByZ}>
                  Name Z-A
                </StyledFilterOptionButton>
              </StyledFilterContainer>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      <StyledFilterAndCarsContainer>
        <StyledProductListBody>
          {currentPosts.map(([key, value]: any) => {
            return (
              <StyledProductContainer
                onClick={() => navigate(`/vehicles/${key}`)}
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
      </StyledFilterAndCarsContainer>
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
