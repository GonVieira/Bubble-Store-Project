import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vehicles from "../../../vehicles.json";
import Pagination from "../../utils/Pagination/index";

const Cars = () => {
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
      <h1>This is Cars page!</h1>
    </>
  );
};

export default Cars;
