import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { IoMenuSharp } from "react-icons/io5";

const Icon = styled(IoMenuSharp)`
  font-size: 24px;
  width: 24px;
  height: 24px;
`;
const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%; /* Take up the entire width */
  height: 70px;
  background-color: #282828;
  position: fixed;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 30px; /* Add padding for spacing */
`;

const NavBar = () => {
  return (
    <div>
      <Navigation>
        <Header>Dayne Guy</Header>
        <Icon />
      </Navigation>
    </div>
  );
};

export default NavBar;
