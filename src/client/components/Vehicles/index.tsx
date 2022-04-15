import React, { useState } from "react";
import vehicles from "../../../vehicles.json";
import {
  StyledImg,
  StyledProductListBody,
  StyledProductContainer,
  StyledProductStatsComponent,
} from "../GlobalStyledComponents/index";
import Pagination from "../../utils/Pagination/index";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  //GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Object.entries(vehicles).slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  //CHANGE PAGES
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <h1>This is Vehicles page!</h1>
      <StyledProductListBody>
        {currentPosts.map(([_, value]: any) => {
          return (
            <StyledProductContainer>
              <StyledImg alt="foto ganda fixe" src={value.img[0]} />
              <StyledProductStatsComponent>
                <p>{value.name}</p>
                <p>
                  Price:{" "}
                  {value.price
                    .toLocaleString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  €
                </p>
              </StyledProductStatsComponent>
            </StyledProductContainer>
          );
        })}
      </StyledProductListBody>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={Object.entries(vehicles).length}
        paginate={paginate}
      />
    </>
  );
};

export default Product;
