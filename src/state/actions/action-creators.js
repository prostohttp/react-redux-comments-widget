import { ADD_COMMENT, DELETE_COMMENT } from "./action-types";

export const addComment = (dispatch, comment) =>
  dispatch({
    type: ADD_COMMENT,
    payload: {
      ...comment,
      date: new Date().toLocaleString()
    }
  });

export const deleteComment = (dispatch, id) =>
  dispatch({
    type: DELETE_COMMENT,
    payload: id
  });
