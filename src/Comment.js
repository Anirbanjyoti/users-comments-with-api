import React from "react";
import './Comment.css'

const Comment = ({ comment }) => {
  const { thumbnailUrl, title, name, time } = comment;

  return (
    <div>
      <div className="comment">
        <div>
          <img src={thumbnailUrl} alt="images"></img>
        </div>
        <div>
          <p><span style={{fontSize:'20px', opacity:'.7'}}>{name}</span><span style={{marginLeft:'12px', fontSize:'10px', opacity:".4"}}>{time} ago</span></p>
          {title}
        </div>
      </div>
    </div>
  );
};

export default Comment;
