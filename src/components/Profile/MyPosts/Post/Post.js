import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.posts}>
      <div className={s.circle}></div>
      <div className={s.item}>{props.message}</div>
      <div className={s.item}>{props.likesCount}</div>
    </div>
  );
};

export default Post;
