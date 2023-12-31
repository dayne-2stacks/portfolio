import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';

// Styled components for nicer styling
const PostContainer = styled.div`
  max-width: 800px;
  margin: auto;
`;

const PostTitle = styled.h1`
  font-size: 2rem;
  // color: #333;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
`;

const PostMetadata = styled.div`
  font-size: 0.9rem;
  // color: #666;
  margin-bottom: 2rem;
`;

const PostBody = styled.div`
  font-size: 1rem;
  // color: #333;
`;

const PostTags = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #666;
`;

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  
  useEffect(() => {
    fetch(`https://portfolio-functions-dayne.azurewebsites.net/api/getEntryBySlug?code=UMaUdi42KkiIerZ6ZM-qDyXxKr5B0Og2rX360-HYo6NAAzFucjwquA==&slug=${slug}`)
    .then((response) => response.json())
    .then((data) => {
        setPost(data); // Assuming the Azure Function returns a single post object
        console.log(data.fields.richText)
      })
      .catch((error) => console.error('Error fetching post:', error));
    }, [slug]);
    
    
    if (!post) {
      return <div>Loading...</div>;
    }
    
    const { title, heroImage, author, publishDate, body, tags } = post.fields;
    
    const options = {
      renderNode: {
        'embedded-asset-block': (node) => {
          return (
            <img 
              src={`https:${node.data.target.fields.file.url}`} 
              alt={node.data.target.fields.title}
              style={{ width: '100%', height: 'auto' }}
            />
          );
        },
      },
    };
    
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      {heroImage && <HeroImage src={heroImage.fields.file.url} alt={title} />}
      <PostMetadata>
        <p>By {author.fields.name}</p>
        <p>Published on {new Date(publishDate).toDateString()}</p>
      </PostMetadata>
      <PostBody>
        
        {documentToReactComponents(post.fields.richText, options) || body || post.fields.richText}
      </PostBody>
      <PostTags>
        {tags.map(tag => (
          <span style={{"padding": "20px 20px 20px 0"}} key={tag}>{tag}</span>
        ))}
      </PostTags>
      <Link to="/blog"> Read More Blogs</Link>
    </PostContainer>
  );
};

export default BlogPost;
