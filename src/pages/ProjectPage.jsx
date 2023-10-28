import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Cover from "../components/Image/Cover";
import ProjectFacts from "../components/Projects/ProjectFacts/ProjectFacts";
import { Divider } from "../components/Base/Divider";
import { ProjectGallery } from "../components/Projects/ProjectGallery.jsx";

const ProjectPage = () => {
  return (
    <div>
      <NavBar />
      <Cover />
      <ProjectFacts />
      <Divider />
      <ProjectGallery />
    </div>
  );
};

export default ProjectPage;
