import React from "react";
import { Container } from "../Base/Container";
import FeatureImage from "../Image/FeatureImage";
import { H1 } from "../Base/Headings";
import { Button } from "../Base/Button";

const Projects = () => {
  return (
    <Container>
      <H1> // My Projects</H1>
      <FeatureImage />
      <FeatureImage />
      <FeatureImage />
      <FeatureImage />
      <Button> VIEW MORE PROJECTS </Button>
    </Container>
  );
};

export default Projects;
