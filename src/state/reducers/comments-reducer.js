import { ADD_COMMENT, DELETE_COMMENT } from "../actions/action-types";

const initialState = {
  comments: JSON.parse(localStorage.getItem("comments")) || []
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter(comment => comment.date !== action.payload)
        ]
      };
    default:
      return state;
  }
};

export default commentsReducer;
