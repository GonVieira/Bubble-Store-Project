import React, { useState, useEffect } from "react";
import vehicles from "../../../vehicles.json";
import {
  IoMdArrowDropdown,
  IoMdArrowDropleft,
  IoMdArrowDropright,
  IoMdArrowDropup,
} from "react-icons/io";
import {
  StyledFilterDivContainer,
  StyledTextFieldDiv,
  StyledInput,
  StyledDiv,
  StyledButton,
  StyledDropdownOptionsContainer,
  StyledDropdownOption,
  StyledDropdownDiv,
  StyledFilterCategoryText,
  DropRightDiv,
  StyledDropRightOptionsContainer,
  StyledDropRightOption,
  StyledFilterComponentTitle,
  StyledFilterComponentTitleDiv,
} from "./FilterStyledComponents/style";

const FilterComponent = ({
  sortType,
  setSortType,
  vehiclesArray,
  setVehiclesArray,
}: any) => {
  const [sortIsOpen, setSortIsOpen] = useState(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [carCategoriesIsOpen, setCarCategoriesIsOpen] = useState(false);
  const [motorcycleCategoriesIsOpen, setMotorcycleCategoriesIsOpen] =
    useState(false);
  const [allVehiclesArray] = useState(Object.entries(vehicles));
  const [firstLevelCategories, setFirstLevelCategories] = useState<any>([]);
  const [carCategory, setCarCategory] = useState<any>([]);
  const [motorcycleCategory, setMotorcycleCategory] = useState<any>([]);
  const [thirdLevelCategories, setThirdLevelCategories] = useState<any>([]);
  const sortToggling = () => setSortIsOpen(!sortIsOpen);
  const filterToggling = () => setFilterIsOpen(!filterIsOpen);

  //CATEGORIES
  useEffect(() => {
    let uniqueArray: any[] = [];
    let carCategoriesArray: any[] = [];
    let motorcycleCategoriesArray: any[] = [];

    allVehiclesArray.filter(([key, value]: any) => {
      if (uniqueArray.indexOf(value.category[0]) === -1) {
        uniqueArray.push(value.category[0]);
      }

      //DISTRIBUTE SECOND LEVEL CATEGORIES IN THEIR ARRAYS
      if (value.category[0] === "Car") {
        if (carCategoriesArray.indexOf(value.category[1]) === -1) {
          carCategoriesArray.push(value.category[1]);
        }
      }
      if (value.category[0] === "Motorcycle") {
        if (motorcycleCategoriesArray.indexOf(value.category[1] === -1)) {
          motorcycleCategoriesArray.push(value.category[1]);
        }
      }
    });
    setCarCategory([...carCategoriesArray]);
    setMotorcycleCategory([...motorcycleCategoriesArray]);
    setFirstLevelCategories([...uniqueArray]);
  }, [allVehiclesArray]);

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
      <StyledFilterDivContainer>
        <StyledFilterComponentTitleDiv>
          <StyledFilterComponentTitle>Filters</StyledFilterComponentTitle>
        </StyledFilterComponentTitleDiv>
        <StyledTextFieldDiv>
          <StyledInput type="text" placeholder="Search By Name" />
        </StyledTextFieldDiv>

        <StyledDiv>
          <StyledFilterCategoryText>Sorted By :</StyledFilterCategoryText>
          <StyledDropdownDiv>
            {" "}
            <StyledButton onClick={sortToggling}>
              {sortType}{" "}
              {sortIsOpen ? (
                <IoMdArrowDropup style={{ verticalAlign: "middle" }} />
              ) : (
                <IoMdArrowDropdown style={{ verticalAlign: "middle" }} />
              )}
            </StyledButton>
            {sortIsOpen && (
              <StyledDropdownOptionsContainer>
                <StyledDropdownOption onClick={defaultSort}>
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

        <StyledDiv>
          <StyledFilterCategoryText>Filter By:</StyledFilterCategoryText>
          <StyledDropdownDiv>
            <StyledButton onClick={filterToggling}>
              Filter
              {filterIsOpen ? (
                <IoMdArrowDropup style={{ verticalAlign: "middle" }} />
              ) : (
                <IoMdArrowDropdown style={{ verticalAlign: "middle" }} />
              )}
            </StyledButton>
            {filterIsOpen && (
              //CAR BUTTON
              <StyledDropdownOptionsContainer>
                <StyledDropdownOption
                  onMouseEnter={(e) => {
                    setCarCategoriesIsOpen(true);
                  }}
                  onMouseLeave={(e) => {
                    setCarCategoriesIsOpen(false);
                  }}
                >
                  Car <IoMdArrowDropright style={{ verticalAlign: "middle" }} />
                  <StyledDropRightOptionsContainer>
                    {carCategoriesIsOpen &&
                      carCategory.map((value: any) => {
                        return (
                          <StyledDropRightOption
                            onMouseEnter={(e) => {
                              setCarCategoriesIsOpen(true);
                            }}
                            onMouseLeave={(e) => {
                              setCarCategoriesIsOpen(false);
                            }}
                          >
                            {value}
                          </StyledDropRightOption>
                        );
                      })}
                  </StyledDropRightOptionsContainer>
                </StyledDropdownOption>

                <StyledDropdownOption
                  onMouseEnter={(e) => {
                    setMotorcycleCategoriesIsOpen(true);
                  }}
                  onMouseLeave={(e) => {
                    setMotorcycleCategoriesIsOpen(false);
                  }}
                >
                  Motorcycle{" "}
                  <IoMdArrowDropright style={{ verticalAlign: "middle" }} />
                  <StyledDropRightOptionsContainer>
                    {motorcycleCategoriesIsOpen &&
                      motorcycleCategory.map((value: any) => {
                        return (
                          <StyledDropRightOption
                            onMouseEnter={(e) => {
                              setMotorcycleCategoriesIsOpen(true);
                            }}
                            onMouseLeave={(e) => {
                              setMotorcycleCategoriesIsOpen(false);
                            }}
                          >
                            {value}
                          </StyledDropRightOption>
                        );
                      })}
                  </StyledDropRightOptionsContainer>
                </StyledDropdownOption>
              </StyledDropdownOptionsContainer>
            )}
          </StyledDropdownDiv>
        </StyledDiv>
      </StyledFilterDivContainer>
    </>
  );
};

export default FilterComponent;
