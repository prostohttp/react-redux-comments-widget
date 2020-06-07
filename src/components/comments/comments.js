import React from "react";
import { connect } from "react-redux";

import "./style.css";
import { deleteComment } from "../../state/actions/action-creators";

const Comments = ({ comments, deleteComment }) => {
  const commentsList = comments.map(({ title, date, text }) => (
    <div className="card" key={date}>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => deleteComment(date)}
      >
        <i className="fa fa-trash" aria-hidden="true" />
      </button>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  ));
  return (
    <>
      <h3 className="text-center">Комментарии</h3>
      {comments.length ? (
        commentsList
      ) : (
        <div className="text-center">Ничего нет</div>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteComment: id => deleteComment(dispatch, id)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
