import React from "react";
import styled from "styled-components";
import { IoMap } from "react-icons/io5";

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start; /* Align items to the left */
  padding: 0 20px;
`;

const Icon = styled(IoMap)`
  font-size: 20px; /* Adjust the size as needed */
`;

const LocationText = styled.p`
  font-size: 18px;
  font-family: "Source Sans Pro";
  line-height: 20px;
  padding: 0 10px;
  text-align: justify; /* Add text alignment property for justification */
`;

const Location = () => {
  return (
    <LocationWrapper>
      <Icon />
      <LocationText> Tampa, Fl</LocationText>
    </LocationWrapper>
  );
};

export default Location;
