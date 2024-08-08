import posts from "../data/posts";
import { combineReducers } from "redux";

const postReducer = (state = posts, action) => {
  switch (action.type) {
    case "REMOVE_POST":
      return state.filter((post) => post.id !== action.id);

    case "ADD_POST":
      return [...state, action.post];

    default:
      return state;
  }
};

const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      if (!state[action.postId]) {
        return { ...state, [action.postId]: [action.comment] };
      } else {
        return {
          ...state,
          [action.postId]: [...state[action.postId], action.comment],
        };
      }

    default:
      return state;
  }
};

const rootReducer = combineReducers({ postReducer, commentReducer });

export default rootReducer;
