import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  font-size: 18px;
  font-family: "Source Sans Pro";
  font-weight: 500;
  line-height: 20px;
`;

const Header = ({ children }) => {
  return <HeaderStyle>{children} </HeaderStyle>;
};

export default Header;
