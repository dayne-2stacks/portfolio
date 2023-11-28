import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pro_pic from "../../pro_pic.jpg"

const ImageWrapper = styled.div`
  width: 100%;
  max-height: 35vh; /* Use vh (viewport height) units */
  // padding-top: 70px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 35vh;
  object-fit: cover;
  object-position: center center;
  /* display: block; Remove any extra space below the inline image */
`;

const Avatar = styled.img`
  position: absolute;
  top: 30%; /* Position the avatar at the vertical center */
  left: 50%; /* Position the avatar at the horizontal center */
  transform: translate(
    -50%,
    -50%
  ); /* Center the avatar exactly in the middle */
  border-radius: 1000px;
  height: 25%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Cover = ({ cover, avatar }) => {
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
      <Avatar src={pro_pic} alt="profile" />
    </ImageWrapper>
  );
};

export default Cover;
