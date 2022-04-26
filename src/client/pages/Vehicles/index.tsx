import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import vehicles from "../../../vehicles.json";
import FilterComponent from "../../components/FilterComponent/index";
import {
  StyledImg,
  StyledProductListBody,
  StyledProductContainer,
  StyledProductStatsComponent,
  StyledVehicleStatName,
  StyledVehicleStatPrice,
  StyledFilterAndCarsContainer,
} from "./VehiclesListPageStyledComponents/style";
import {
  StyledBedCrumDiv,
  StyledBedCrumAnchor,
  StyledBedCrumArrow,
} from "../../components/GlobalStyledComponents/index";
import Pagination from "../../components/Pagination/index";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesArray, setVehiclesArray] = useState(Object.entries(vehicles));
  const [postsPerPage] = useState(6);
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("Default Sort");
  const { category1, category2, category3 } = useParams();

  useEffect(() => {
    //RESET PAGE
    setCurrentPage(1);

    //CATEGORY 1, CATEGORY 2 and CATEGORY 3
    if (
      category1 !== undefined &&
      category2 !== undefined &&
      category3 !== undefined
    ) {
      const filteredVehiclesArray = Object.entries(vehicles).filter(
        ([key, value]: any) => {
          return (
            value.category[0].toLowerCase() === category1 &&
            value.category[1].toLowerCase() === category2 &&
            value.category[2].toLowerCase() === category3
          );
        }
      );
      setVehiclesArray(filteredVehiclesArray);
      return;
    }

    //CATEGORY 1 and CATEGORY 2
    if (
      category1 !== undefined &&
      category2 !== undefined &&
      category3 === undefined
    ) {
      const filteredVehiclesArray = Object.entries(vehicles).filter(
        ([key, value]: any) => {
          return (
            value.category[0].toLowerCase() === category1 &&
            value.category[1].toLowerCase() === category2
          );
        }
      );
      setVehiclesArray(filteredVehiclesArray);
      return;
    }
    //CATEGORY 1
    if (
      category1 !== undefined &&
      category2 === undefined &&
      category3 === undefined
    ) {
      const filteredVehiclesArray = Object.entries(vehicles).filter(
        ([key, value]: any) => {
          return value.category[0].toLowerCase() === category1;
        }
      );
      setVehiclesArray(filteredVehiclesArray);
      return;
    }
    //ALL PRODUCTS
    if (category1 === undefined && category2 === undefined) {
      setVehiclesArray(Object.entries(vehicles));
      return;
    }
  }, [category1, category2, category3]);


  //GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = vehiclesArray.slice(indexOfFirstPost, indexOfLastPost);

  //BEDCRUM
  const bedCrum = () => {
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
      <StyledBedCrumDiv>{bedCrum()}</StyledBedCrumDiv>
      <StyledFilterAndCarsContainer>
        <FilterComponent sortType={sortType} setSortType={setSortType} vehiclesArray={vehiclesArray} setVehiclesArray={setVehiclesArray}/>
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
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postsPerPage={postsPerPage}
            totalPosts={vehiclesArray.length}
          />
        </StyledProductListBody>
      </StyledFilterAndCarsContainer>
    </>
  );
};

export default Product;
