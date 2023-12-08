import React, { useState, useEffect, useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container } from "../Base/Container";
import styled from "styled-components";
import digitalIdentity from "../../Digital-Identity.png";
import SocialMenu from "../Contact/SocialMenu";
import Card from "../Card/Card";
import { useLazyLoad } from "../../utils/Utils";
import { useTrail, animated,config } from "@react-spring/web";

const BlogListLayout = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const Hero = styled.img`
max-width: 100vw;
padding: 25px 0;
@media (min-width: 760px) {
  max-height: 45vh;
  max-width: 40vw;
  padding: 20px;
}
`

const BlogItem = styled(animated.div)`
  max-width: 100vw;
padding: 20px 0;

@media (min-width: 760px) {

max-height: 45vh;
  max-width: 45vw;
  padding: 0px;
}`

const ImageWrapper = styled.div`
  margin-left: -20px;
  width: 100vw;
  max-height: calc(100vh - 70px); /* Use vh (viewport height) units */
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  object-fit: cover;
  object-position: center center;
  /* display: block; Remove any extra space below the inline image */
`;

const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit; // optional, to inherit text color from parent
  // Add more styles as needed
  
`;

const Badge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  border: 2px solid #007bff; // You can change this color to any you prefer

  border-radius: 5px;
  font-size: 0.9em;
  font-weight: bold;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row; // Aligns children in a row
  align-items: center; // Vertically centers items (optional)
  justify-content: flex-start; // Aligns items to the start of the container (optional)
  gap: 10px; // Adds space between items (optional)
`;


const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://portfolio-functions-dayne.azurewebsites.net/api/GetEntries?code=d_3QJ3HqCyWB7Kn2CYbtwlPWu71x67iIoHGdNFR_EdoxAzFuwFaM9w=="
    ) // The URL to your Azure Function endpoint
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
// Using `useTrail` for staggered animations
const trail = useTrail(posts.length, {
  from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
  to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  config: { duration:750,mass: 5, tension: 2000, friction: 200 }
});

const renderedPosts = useMemo(() => {
  return trail.map((style, index) => (
    <BlogListLayout style={style} key={posts[index].sys.id}>

        <Link to={`/blog/post/${posts[index].fields.slug}`}>
      <div key={posts[index].fields.heroImage.sys.id}>
        <LazyLoadedImage src={posts[index].fields.heroImage.fields.file.url} alt={posts[index].fields.title} />
      </div>
      </Link>
    
      <BlogItem style={style}>
        <Link to={`/blog/post/${posts[index].fields.slug}`}>
          <h2>{posts[index].fields.title}</h2>
          <p>{posts[index].fields.description}</p>
          <BadgeContainer>
            {posts[index].fields.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}    
          </BadgeContainer>
        </Link>
      </BlogItem>
    </BlogListLayout>
  ));
}, [posts, trail]);

return (
  <>
    <ImageWrapper>
      <Image src={digitalIdentity}></Image>
    </ImageWrapper>

    <Container>
      <h1>Understanding my Digital Identity</h1>
      <p></p>

      {renderedPosts}
      
    </Container>
      
  </>
);
};

export default BlogList;


const LazyLoadedImage = ({ src, alt }) => {
  const loadedSrc = useLazyLoad(src);

  return <Hero src={loadedSrc} alt={alt} data-src={src} />;
};