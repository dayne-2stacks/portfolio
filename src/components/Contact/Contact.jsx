import React, { useState } from "react";
import { H1, H3 } from "../Base/Headings";
import styled from "styled-components";
import Card from "../Card/Card";
import { Divider } from "../Base/Divider";
import { handleChange } from "../../utils/Utils";
import { S2 } from "../Base/Subheadings";
import { Container } from "../Base/Container";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import SocialMenu from "./SocialMenu";
import { Button } from "../Base/Button";

const Input = styled.input`
  height: 48px;
  width: 100%;
  padding: 0px 8px;
  border: 0;
  box-sizing: border-box;
  border-radius: 24px;
  background-color: #353535;
  color: #c1c1c1;
  font-size: 18px;
  font-family: "Source Sans Pro";
  font-weight: 300;
  line-height: 20px;
  outline: none;
  margin: 10px 0;
`;

const Select = styled.select`
  height: 48px;
  width: 100%;
  padding: 0px 8px;
  border: 0;
  box-sizing: border-box;
  border-radius: 24px;
  background-color: #353535;
  outline: none;
  margin: 10px 0;
  color: #c1c1c1;
  font-size: 18px;
  font-family: "Source Sans Pro";
  font-weight: 300;
  line-height: 20px;
`;
const Option = styled.option`
  color: #c1c1c1;
  font-size: 18px;
  font-family: "Source Sans Pro";
  font-weight: 300;
  line-height: 20px;
`;

const PhoneNumber = styled.p`
  font-size: 16px;
  font-family: "Source Sans Pro";
  font-weight: 500;
  line-height: 28px;
  margin: 0px;
`;
const Email = styled.a`
  font-size: 16px;
  font-family: "Source Sans Pro";
  font-weight: 500;
  line-height: 28px;
  margin: 0px;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <Card>
        <H1> // Let's Connect</H1>
        <form>
          <Input
            placeholder="YOUR NAME *"
            onChange={(e) => handleChange(e, setName)}
          />
          <Input
            placeholder="YOUR EMAIL *"
            onChange={(e) => handleChange(e, setEmail)}
          />
          <Select onChange={(e) => handleChange(e, setInterest)}>
            <Option value=""> WHAT ARE YOU LOOKING FOR? </Option>
            <Option value="contact">Contact</Option>
            <Option value="recruit">Recruit</Option>
          </Select>
          <Input
            placeholder="WRITE A MESSAGE..."
            onChange={(e) => handleChange(e, setMessage)}
          />
          <Divider secondary />
          <Button type="submit"> SEND MESSAGE</Button>
          <Divider secondary />
        </form>
        <H3>Dayne Guy</H3>
        <Email href="mailto:dayneguy@gmail.com">dayneguy@gmail.com</Email>
        <PhoneNumber>727-554-4474</PhoneNumber>

        <div>
          <SocialMenu />
        </div>
      </Card>
    </div>
  );
};

export default Contact;
