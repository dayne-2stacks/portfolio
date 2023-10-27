import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 30vh; /* Use vh (viewport height) units */
  padding: 10px 0;
  margin: 16px 0;
`;

const Image = styled.img`
  width: 100%;
  max-height: 30vh;
  object-fit: cover;
  border-radius: 24px;
  object-position: center center;
  /* display: block; Remove any extra space below the inline image */
`;

const FeatureImage = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // Fetch a random image from Lorem Picsum
    fetch("https://picsum.photos/800/800?random")
      .then((response) => response.url)
      .then((url) => setImageSrc(url))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ImageWrapper>
      <Image src={imageSrc} alt="Random Image" />
    </ImageWrapper>
  );
};

export default FeatureImage;
