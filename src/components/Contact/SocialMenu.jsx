import React from "react";
import styled from "styled-components";
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoGithub,
} from "react-icons/io";
import { H3 } from "../Base/Headings";
import { Email, PhoneNumber } from "./styled";


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
    <H3>Dayne Guy</H3>
        <Email href="mailto:dayneguy@gmail.com">dayneguy@gmail.com</Email>
        <PhoneNumber>727-554-4474</PhoneNumber>
      <p>Connect with me on social media.</p>
      <MenuContainer>
        <MenuItem>
          <MenuLink href="https://www.linkedin.com/in/dayne-guy/">
            <IoLogoLinkedin />
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="https://www.instagram.com/dayngerous_guy/?next=%2F">
            <IoLogoInstagram />
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="https://www.facebook.com/dayne.guy.58/">
            <IoLogoFacebook />
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="https://github.com/dayne-2stacks">
            <IoLogoGithub />
          </MenuLink>
        </MenuItem>
      </MenuContainer>
    </>
  );
};

export default SocialMenu;
