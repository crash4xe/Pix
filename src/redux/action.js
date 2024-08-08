import { db } from "../Database/config";
export function startAddingPost(post) {
  return (dispatch) => {
    db.ref("posts")
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function removePost(id) {
  return {
    type: "REMOVE_POST",
    id,
  };
}

export function addPost(post) {
  return { type: "ADD_POST", post };
}

export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId,
  };
}
