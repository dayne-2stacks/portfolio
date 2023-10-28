import { animated } from "@react-spring/web";
import { Container } from "../Base/Container";
import styled from "styled-components";

export const Gallery = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ProjectImg = styled(animated.img)`
  margin: 10px 0;
  border-radius: 25px;
  width: calc(100% - 10px); /* 2 items per line on phones */
  @media (min-width: 768px) {
    width: calc(
      33% - 20px
    ); /* 4 items per line on tablets and larger screens */
  }
`;
