import styled from "styled-components";

export const SyledTitle = styled.h1`
  font-size: 35px;
  padding: 10px;
  margin-top: 10px;
  color: white;
`;

export const StyledBedCrumDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledBedCrumAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: #ff003c;
  padding-right: 5px;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: #04daf6;
  }
`

export const StyledBedCrumArrow = styled.h2`
  font-size: 20px;
  color: #ff003c;
  padding-right: 5px;
`