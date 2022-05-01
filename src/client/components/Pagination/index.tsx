import React from "react";
import {
  StyledPagButton,
  SyledPaginationDiv,
  StyledNumberText,
} from "./PaginationStyledComponents/style";

const Pagination = ({
  currentPage,
  setCurrentPage,
  postsPerPage,
  totalPosts,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <SyledPaginationDiv>
        {currentPage !== 1 && (
          <StyledPagButton onClick={previousPage}>&#60;</StyledPagButton>
        )}
        <StyledNumberText>
          {currentPage}/{pageNumbers.length}
        </StyledNumberText>
        {currentPage < pageNumbers.length && (
          <StyledPagButton onClick={nextPage}>&#62;</StyledPagButton>
        )}
      </SyledPaginationDiv>
    </>
  );
};

export default Pagination;
