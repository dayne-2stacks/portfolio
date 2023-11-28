import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const BlogList = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetch("https://portfolio-functions-dayne.azurewebsites.net/api/GetEntries?code=d_3QJ3HqCyWB7Kn2CYbtwlPWu71x67iIoHGdNFR_EdoxAzFuwFaM9w=="
      ) // The URL to your Azure Function endpoint
        .then(response => response.json())
        .then(data => {
          setPosts(data);
        })
        .catch(error => console.error('Error fetching posts:', error));
    }, []);
  
    return (
      <div>
        {posts.map(post => (
          <div key={post.sys.id}>
            <Link to={`/blog/post/${post.fields.slug}`}>

            <h2>{post.fields.title}</h2>
            <p>{post.fields.description}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogList