import React, { useEffect } from "react";
import { H1, H2 } from "../Base/Headings";
import { expertise } from "./expertise";
import { Container } from "../Base/Container";
import styled from "styled-components";

const Icon = styled.div`
  font-size: 36px;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  color: #161616;
  background-color: #ffffff;
  margin: 0 20px 0 0;
`;

const Expert = styled.div`
  display: flex;
  align-items: center;
`;

const Expertise = () => {
  useEffect(() => {
    console.log(expertise);
  });
  return (
    <Container>
      <H1>// My Expertise</H1>
      <div>
        {expertise.map((expert) => {
          return (
            <Expert key={expert.id}>
              <Icon> {expert.icon}</Icon>

              <H2>{expert.expertise}</H2>
            </Expert>
          );
        })}
      </div>
    </Container>
  );
};

export default Expertise;
