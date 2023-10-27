import React from "react";
import styled from "styled-components";
import { Container } from "../../Base/Container";
import { H3 } from "../../Base/Headings";

const ProjectFactsContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
`;

const ProjectData = styled.div`
  text-align: center;
`;

export const ProjectFacts = () => {
  return (
    <ProjectFactsContainer>
      <ProjectData>
        <H3> 33+</H3>
        Projects
      </ProjectData>
      <ProjectData>
        <H3> 33+</H3>
        Languages
      </ProjectData>
      <ProjectData>
        <H3> 33+</H3>
        Websites
      </ProjectData>
    </ProjectFactsContainer>
  );
};

export default ProjectFacts;
