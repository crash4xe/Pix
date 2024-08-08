import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Photo from "./Photo";
import Comments from "./Comments";

function Post(props) {
  const params = useParams();
  const navigate = useNavigate();
  const id = Number(params.id);
  const post = props.posts.find((post) => post.id === id);
  return (
    <div className="post">
      <Photo post={post} {...props} navigate={navigate} />
      <Comments
        addComment={props.addComment}
        comments={props.comments[id] || []}
        id={id}
      />
    </div>
  );
}

export default Post;
