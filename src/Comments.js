import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import './Comments.css';

const axios = require("axios");
const Comments = () => {
  const [comments, setComments] = useState([]);


  const commentsUrl = "comments.json";
  useEffect(() => {
    axios.get(commentsUrl).then((data) => {
      const commentData = data.data;
      setComments(commentData);
    });
  }, []);

  return (
    <div className="comments-container">
      <h1>{comments.length} comments</h1>
      {comments.map((comment) => (
        <Comment key={comment.postId} comment={comment}></Comment>
      ))}
    </div>
  );
};

export default Comments;
