import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Photo from "./Photo";
import Comments from "./Comments";

function Post(props) {
  const params = useParams();
  const navigate = useNavigate();
  const id = Number(params.id);
  const post = props.posts.find((post) => post.id === id);

  if (props.loading === true) {
    return <div className="loader">...loading</div>;
  } else if (post) {
    return (
      <div className="post">
        <Photo post={post} {...props} navigate={navigate} />
        <Comments
          startAddingComment={props.startAddingComment}
          addComment={props.addComment}
          comments={props.comments[id] || []}
          id={id}
        />
      </div>
    );
  } else {
    return <h1>___ no post found</h1>;
  }
}

export default Post;
