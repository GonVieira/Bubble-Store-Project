import styled from "styled-components";

export const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px;
  transition: transform 0.4s ease;
  transform-origin: 50% 50%;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    width: 100%;
  }
`;

export const StyledProductListBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  color: #f4f4f4;
  padding: 20px;
  width: 80%;
  height: 100%;
  margin-top: 10px;
`;

export const StyledProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  width: 380px;
  height: 250px;
  overflow: hidden;
`;

export const StyledProductStatsComponent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

export const StyledVehicleStatName = styled.p`
  color: #ff003c;
  padding: 2px;
  font-size: 20px;
  font-weight: bold;
`;

export const StyledVehicleStatPrice = styled.p`
  color: #ff003c;
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 25%;
  padding: 10px;
  flex-direction: row;
  margin-top: 10px;
`

export const StyledFilterOptionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
  height: 60%;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  color: #000000;
  border: 2px solid rgba(0, 0, 0, 0.0);
  background-color: #F3E600;
  transition: 0.3s ease;
  margin-left: 10px;

  &:hover {
    border: 2px solid #04DAF6;
    box-shadow: 3px 3px #04DAF6;
  }
`

export const StyledFilterAndCarsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 346px;
  width: 95%;
  flex-direction: row;
`

//DROPDOWN 
export const DropDownContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  margin: 10px;
`;

export const DropDownHeader = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  width: 20%;
  height: 60%;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  color: #000000;
  border: 2px solid rgba(0, 0, 0, 0.0);
  background-color: #F3E600;
  transition: 0.3s ease;
  margin-left: 10px;

  &:hover {
    border: 2px solid #ff003c;
    box-shadow: 3px 3px #ff003c;
  }
`;

export const DropDownListContainer = styled.div`
`;

export const DropDownList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
