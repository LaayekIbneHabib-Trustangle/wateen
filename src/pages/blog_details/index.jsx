import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../components";
import data from "../data/blog-posts.json";
import "./style.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const selectedPost = data.find((post) => post.id === parseInt(id));
    if (selectedPost) {
      setPost(selectedPost);
    } else {
      // Handle post not found
      console.log("Post not found");
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section
        style={{
          marginBottom: "50rem",
          borderTop: "1px solid rgba(102, 112, 133, .3)",
        }}
      >
        <Wrapper>
          <div className="blog">
            <h1 className="post-title">{post.title}</h1>
            <img src={post.banner} alt="" />
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default BlogDetails;
