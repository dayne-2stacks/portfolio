import React, { useEffect, useState } from "react";
import { Container } from "../Base/Container";
import { H1 } from "../Base/Headings";
import { useSwipeHorizontal } from "../../utils/useSwipeHorizontal";
import { Gallery, ProjectImg } from "./Gallery";

export const ProjectGallery = ({ children }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Fetch a random image from Lorem Picsum
    fetch("https://picsum.photos/800/800?random")
      .then((response) => response.url)
      .then((url) => {
        setImageSrc(url);
        // Create the slides array with the fetched image URL
        const newSlides = [
          { key: "Slide1", url, alt: "Slide1" },
          {
            key: "Slide2",
            url,
            alt: "Slide2",
          },
          { key: "Slide3", url, alt: "Slide3" },
          { key: "Slide4", url, alt: "Slide4" },
          { key: "Slide5", url, alt: "Slide5" },
          { key: "Slide6", url, alt: "Slide6" },
        ];
        setSlides(newSlides);
      })
      .catch((error) => console.error(error));
  }, []);

  const [handlers, current] = useSwipeHorizontal(currentSlide, slides);
  useEffect(() => {
    setCurrentSlide(current);
    console.log(current);
  }, [current]);

  return (
    <Container>
      <H1>// Projects</H1>

      <Gallery {...handlers}>
        {slides.map((slide, index) => {
          return (
            <ProjectImg
              key={slide.key}
              src={slide.url}
              alt={slide.alt}
              style={{
                display:
                  index === currentSlide - 1 ||
                  index === currentSlide ||
                  index === (currentSlide + 1) % slides.length ||
                  (currentSlide === 0 && (index === 5 || index === 1)) ||
                  (currentSlide === 5 && (index === 4 || index === 0))
                    ? "block"
                    : "none",
              }}
            />
          );
        })}
      </Gallery>
    </Container>
  );
};
