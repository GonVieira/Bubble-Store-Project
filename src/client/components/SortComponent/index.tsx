import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import {
  StyledDiv,
  StyledButton,
  StyledFilterCategoryText,
  StyledDropdownDiv,
  StyledDropdownOptionsContainer,
  StyledDropdownOption,
} from "../SortComponent/SortStyledComponents/style";

const SortComponent = ({
  sortType,
  setSortType,
  vehiclesArray,
  setVehiclesArray,
}: any) => {
  const [sortIsOpen, setSortIsOpen] = useState<boolean>(false);
  let ref = useRef<any>();

  useEffect(() => {
    const handler = (event: { target: any; }) => {
     if (sortIsOpen && ref.current && !ref.current.contains(event.target)) {
      setSortIsOpen(false);
     }
    };
    document.addEventListener("mousedown", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
    };
   }, [sortIsOpen]);

  //const sortToggling = () => setSortIsOpen(!sortIsOpen);

  //SORTS
  const defaultSort = () => {
    let sortedArray = vehiclesArray;

    sortedArray.sort((a: any, b: any) => {
      return a[0] - b[0];
    });
    setVehiclesArray([...sortedArray]);
    setSortIsOpen(false);
    setSortType("Default Sort");
  };

  const orderByPriceAsc = () => {
    let sortedArray = vehiclesArray;

    sortedArray.sort((a: { price: number }[], b: { price: number }[]) => {
      return a[1].price - b[1].price;
    });
    setVehiclesArray([...sortedArray]);
    setSortIsOpen(false);
    setSortType("Price Asc");
  };

  const orderPriceByDesc = () => {
    let sortedArray = vehiclesArray;

    sortedArray.sort((a: { price: number }[], b: { price: number }[]) => {
      return b[1].price - a[1].price;
    });
    setVehiclesArray([...sortedArray]);
    setSortIsOpen(false);
    setSortType("Price Desc");
  };

  const nameOrderByA = () => {
    let sortedArray = vehiclesArray;

    sortedArray.sort((a: { name: string }[], b: { name: any }[]) => {
      return a[1].name.localeCompare(b[1].name);
    });
    setVehiclesArray([...sortedArray]);
    setSortIsOpen(false);
    setSortType("Name A-Z");
  };

  const nameOrderByZ = () => {
    let sortedArray = vehiclesArray;

    sortedArray.sort((a: { name: any }[], b: { name: string }[]) => {
      return b[1].name.localeCompare(a[1].name);
    });
    setVehiclesArray([...sortedArray]);
    setSortIsOpen(false);
    setSortType("Name Z-A");
  };

  return (
    <>
      <StyledDiv>
        <StyledFilterCategoryText>Sorted By :</StyledFilterCategoryText>
        <StyledDropdownDiv ref={ref}>
          {" "}
          <StyledButton  onClick={() => setSortIsOpen((prev) => !prev)}>
            {sortType}{" "}
            {sortIsOpen ? (
              <IoMdArrowDropup style={{ verticalAlign: "middle" }} />
            ) : (
              <IoMdArrowDropdown style={{ verticalAlign: "middle" }} />
            )}
          </StyledButton>
          {sortIsOpen && (
            <StyledDropdownOptionsContainer >
              <StyledDropdownOption onClick={defaultSort} >
                Default Sort
              </StyledDropdownOption>
              <StyledDropdownOption onClick={orderByPriceAsc}>
                Price Asc
              </StyledDropdownOption>
              <StyledDropdownOption onClick={orderPriceByDesc}>
                Price Desc
              </StyledDropdownOption>
              <StyledDropdownOption onClick={nameOrderByA}>
                Name Asc
              </StyledDropdownOption>
              <StyledDropdownOption onClick={nameOrderByZ}>
                Name Desc
              </StyledDropdownOption>
            </StyledDropdownOptionsContainer>
          )}
        </StyledDropdownDiv>
      </StyledDiv>
    </>
  );
};

export default SortComponent;
