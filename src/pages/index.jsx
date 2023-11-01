import React from "react";
import Layout from "../components/Layout/Layout";
import Cover from "../components/Image/Cover";
import Location from "../components/Location/Location";
import FeatureImage from "../components/Image/FeatureImage";
import QuickFacts from "../components/QuickFacts/QuickFacts";
import Testimonial from "../components/Testimonial/Testimonial";
import { S1, S2 } from "../components/Base/Subheadings";
import { Divider } from "../components/Base/Divider";
import Expertise from "../components/Expertise/index";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import { Container } from "../components/Base/Container";
// import CircularCarousel from "../components/Projects/CircularCarousel";

export const IndexPage = () => {
  return (
    <Layout>
      <Cover />
      <Location />
      <S2>
        I AM A PASSIONATE COMPUTER SCIENCE MAJOR INTERESTED IN CIRCUIT DESIGN
        AND CODING.
      </S2>
      <S1>
        Welcome to my professional portfolio. I love working on computer
        engineering projects of any kind and I'm open to freelance work! Check
        out my projects and feel free to contact me.
      </S1>
      <Container>
        <FeatureImage />
      </Container>
      <QuickFacts />
      <Testimonial />
      <Expertise />
      <Divider />
      <Projects />
      <Contact />
      {/* <CircularCarousel /> */}
    </Layout>
  );
};
