import React from "react";
import data from "../data.json";

const PostList = () => {
  return (
    <div>
      <h1>Hi This is a Title</h1>

      {data.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
