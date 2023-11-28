import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column; /* Items stack vertically */
//   align-items: center; /* Center items horizontally within the container */
  justify-content: flex-start; /* Align items at the top of the container */
  /* Additional styling for the container */
  width: 100%;
  max-width: 100%; /* Adjust the maximum width as needed */.
`;

// const FlexItem = styled.div`
//   /* Styling for individual items */
//   margin: 10px 0; /* Add margin for spacing between items */
// `;

const PaddingTop = styled.div `
  padding-top: 70px;

`

const Layout = ({ children }) => {
  return (
    <FlexContainer>
      <NavBar />
      <PaddingTop>

      {children}
      </PaddingTop>
    </FlexContainer>
  );
};

export default Layout;
