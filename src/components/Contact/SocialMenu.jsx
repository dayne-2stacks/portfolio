import React from "react";
import styled from "styled-components";
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoGithub,
} from "react-icons/io";

const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const MenuItem = styled.li`
  margin: 0 10px 0 0;
`;

const MenuLink = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: #ffffff; /* Change the color as needed */
`;

const SocialMenu = () => {
  return (
    <>
      <p>Connect with me on social media.</p>
      <MenuContainer>
        <MenuItem>
          <MenuLink href="">
            <IoLogoLinkedin />
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="">
            <IoLogoInstagram />
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="">
            <IoLogoFacebook />
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="">
            <IoLogoGithub />
          </MenuLink>
        </MenuItem>
      </MenuContainer>
    </>
  );
};

export default SocialMenu;
