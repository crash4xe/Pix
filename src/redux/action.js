import { db } from "../database/config";
import { ref, update, get, push } from "firebase/database";

export function startAddingPost(post) {
  const postRef = ref(db, "posts");
  return (dispatch) => {
    return update(postRef, { [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function startLoadingPosts() {
  const postRef = ref(db, "posts");
  return (dispatch) => {
    return get(postRef)
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((childSnapshot) => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPosts(posts));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function startRemovingPost(id) {
  const updates = {
    [`posts/${id}`]: null,
    [`comments/${id}`]: null,
  };
  const postRef = ref(db);
  return (dispatch) => {
    return update(postRef, updates).then(() => {
      dispatch(removePost(id));
    });
  };
}

export function startAddingComment(comment, postId) {
  const postRef = ref(db, `comments/${postId}`);
  return (dispatch) => {
    return push(postRef, comment).then(() => {
      dispatch(addComment(comment, postId));
    });
  };
}

export function startLoadingComments() {
  const postRef = ref(db, `comments`);
  return (dispatch) => {
    return get(postRef).then((snapShot) => {
      let comments = {};
      snapShot.forEach((childSnapshot) => {
        comments[childSnapshot.key] = Object.values(childSnapshot.val());
      });
      dispatch(loadComments(comments));
    });
  };
}

export function loadPosts(posts) {
  return {
    type: "LOAD_POSTS",
    posts,
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

export function loadComments(comments) {
  return { type: "LOAD_COMMENTS", comments };
}
