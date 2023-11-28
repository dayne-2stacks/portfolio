import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const HeaderStyle = styled.div`
  font-size: 18px;
  font-family: "Source Sans Pro";
  font-weight: 500;
  line-height: 20px;
`;

const Header = ({ children, href }) => {
  return <HeaderStyle>
    <Link to={href}>
    {children} 
    </Link>
    </HeaderStyle>;
};

export default Header;
