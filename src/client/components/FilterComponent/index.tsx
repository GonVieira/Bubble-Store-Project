import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import vehicles from "../../../vehicles.json";
import SortComponent from "../SortComponent/index";
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
  const navigate = useNavigate();
  const [filterIsOpen, setFilterIsOpen] = useState(true);
  const [thirdLevelCategoriesIsOpen, setThirdLevelCategoriesIsOpen] =
    useState(false);
  const [carCategoriesIsOpen, setCarCategoriesIsOpen] = useState(true);
  const [motorcycleCategoriesIsOpen, setMotorcycleCategoriesIsOpen] =
    useState(false);
  const [allVehiclesArray] = useState(Object.entries(vehicles));
  const [carCategory, setCarCategory] = useState<any>([]);
  const [motorcycleCategory, setMotorcycleCategory] = useState<any>([]);
  const [categoryValue, setCategoryValue] = useState<any>();
  const [firstLevelValue, setFirstLevelValue] = useState<any>();
  let ref = useRef<any>();

  //CATEGORIES
  useEffect(() => {
    let carCategoriesArray: any[] = [];
    let motorcycleCategoriesArray: any[] = [];

    allVehiclesArray.filter(([key, value]: any) => {
      //DISTRIBUTE CATEGORIES IN THEIR ARRAYS
      if (value.category[0] === "Car") {
        if (carCategoriesArray.indexOf(value.category[1]) === -1) {
          carCategoriesArray.push(value.category[1]);
        }
      }
      if (value.category[0] === "Motorcycle") {
        if (motorcycleCategoriesArray.indexOf(value.category[1]) === -1) {
          motorcycleCategoriesArray.push(value.category[1]);
        }
      }
    });
    setCarCategory([...carCategoriesArray]);
    setMotorcycleCategory([...motorcycleCategoriesArray]);
    console.log(motorcycleCategoriesArray);
  }, [allVehiclesArray]);

  //DETECT MOUSE CLICKS OUTSIDE
  useEffect(() => {
    const handler = (event: { target: any }) => {
      if (filterIsOpen && ref.current && !ref.current.contains(event.target)) {
        setFilterIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [filterIsOpen]);

  //THIRD LEVEL CATEGORIES
  const thirdLevelCategories = (
    firstLevelValue: any,
    secondLevelValue: any
  ) => {
    let thirdLevelCategoriesValues: any[] = [];

    allVehiclesArray.filter(([key, value]: any) => {
      if (value.category[1] === secondLevelValue) {
        if (thirdLevelCategoriesValues.indexOf(value.category[2]) === -1) {
          thirdLevelCategoriesValues.push(value.category[2]);
        }
      }
    });

    return thirdLevelCategoriesValues.map((value: any) => {
      return (
        <StyledDropRightOption
          onClick={(e) => {
            e.stopPropagation();
            setFilterIsOpen(false);
            setCarCategoriesIsOpen(false);
            setThirdLevelCategoriesIsOpen(false);
            navigate(
              `${firstLevelValue}/${secondLevelValue.toLowerCase()}/${value.toLowerCase()}`
            );
          }}
          onMouseEnter={(e) => {
            setThirdLevelCategoriesIsOpen(true);
          }}
          onMouseLeave={(e) => {
            setThirdLevelCategoriesIsOpen(false);
          }}
        >
          {value}
        </StyledDropRightOption>
      );
    });
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
        <SortComponent
          sortType={sortType}
          setSortType={setSortType}
          vehiclesArray={vehiclesArray}
          setVehiclesArray={setVehiclesArray}
        />
        <StyledDiv>
          <StyledFilterCategoryText>Filter By :</StyledFilterCategoryText>
          <StyledDropdownDiv ref={ref}>
            <StyledButton onClick={() => setFilterIsOpen((prev) => !prev)}>
              Filter
              {filterIsOpen ? (
                <IoMdArrowDropup style={{ verticalAlign: "middle" }} />
              ) : (
                <IoMdArrowDropdown style={{ verticalAlign: "middle" }} />
              )}
            </StyledButton>
            {filterIsOpen && (
              //CAR BUTTON
              <StyledDropdownOptionsContainer
                onClick={() => {
                  setFilterIsOpen((prev) => !prev);
                }}
              >
                <StyledDropdownOption
                  onClick={() => navigate(`/vehicles/car`)}
                  onMouseEnter={(e) => {
                    setCarCategoriesIsOpen(true);
                  }}
                  onMouseLeave={(e) => {
                    setCarCategoriesIsOpen(false);
                  }}
                >
                  Car <IoMdArrowDropright style={{ verticalAlign: "middle" }} />
                  {/*CAR SUBMENU*/}
                  <StyledDropRightOptionsContainer>
                    {carCategoriesIsOpen &&
                      carCategory.map((value: any) => {
                        return (
                          <StyledDropRightOption
                            onClick={(e) => {
                              e.stopPropagation();
                              setFilterIsOpen(false);
                              setCarCategoriesIsOpen(false);
                              navigate(`car/${value.toLowerCase()}`);
                            }}
                            onMouseEnter={(e) => {
                              setCarCategoriesIsOpen(true);
                              setCategoryValue(value);
                              setFirstLevelValue("car");
                              setThirdLevelCategoriesIsOpen(true);
                            }}
                            onMouseLeave={(e) => {
                              setThirdLevelCategoriesIsOpen(false);
                              setCategoryValue([]);
                              setCarCategoriesIsOpen(false);
                            }}
                          >
                            {value}
                            <IoMdArrowDropright
                              style={{ verticalAlign: "middle" }}
                            />
                            <StyledDropRightOptionsContainer>
                              {thirdLevelCategoriesIsOpen &&
                                value === categoryValue &&
                                thirdLevelCategories(
                                  firstLevelValue,
                                  categoryValue
                                )}
                            </StyledDropRightOptionsContainer>
                          </StyledDropRightOption>
                        );
                      })}
                  </StyledDropRightOptionsContainer>
                </StyledDropdownOption>

                {/**MOTORCYCLE MENU */}
                <StyledDropdownOption
                  onClick={(e) => navigate(`/vehicles/motorcycle`)}
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
                            onClick={(e) => {
                              e.stopPropagation();
                              setFilterIsOpen(false);
                              setMotorcycleCategoriesIsOpen(false);
                              navigate(`motorcycle/${value.toLowerCase()}`);
                            }}
                            onMouseEnter={(e) => {
                              setCarCategoriesIsOpen(true);
                              setCategoryValue(value);
                              setFirstLevelValue("motorcycle");
                              setThirdLevelCategoriesIsOpen(true);
                            }}
                            onMouseLeave={(e) => {
                              setThirdLevelCategoriesIsOpen(false);
                              setCategoryValue([]);
                              setCarCategoriesIsOpen(false);
                            }}
                          >
                            {value}
                            <IoMdArrowDropright
                              style={{ verticalAlign: "middle" }}
                            />
                            <StyledDropRightOptionsContainer>
                              {thirdLevelCategoriesIsOpen &&
                                value === categoryValue &&
                                thirdLevelCategories(
                                  firstLevelValue,
                                  categoryValue
                                )}
                            </StyledDropRightOptionsContainer>
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
