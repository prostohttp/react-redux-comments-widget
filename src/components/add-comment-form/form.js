import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import { vlength, vNotEmpty } from "../../utils/validators";
import { addComment } from "../../state/actions/action-creators";
import "./style.css";

const AddCommentForm = ({ addComment }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const focusField = useRef(null);

  const validateHandler = (target, validators) => {
    return validators.every(validator => validator(target));
  };

  const nameHandler = e => {
    setName(e.target.value);
  };
  const commentHandler = e => {
    setComment(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (
      validateHandler(name, [vNotEmpty(name), vlength(name, 3, 20)]) &&
      validateHandler(comment, [vNotEmpty(comment), vlength(comment, 3, 20)])
    ) {
      addComment({
        title: name,
        text: comment
      });
      setName("");
      setComment("");
      focusField.current.focus();
    } else {
      alert(
        "Поля имя и комментарий не должны быть пустыми, их длина от 3 до 20 символов"
      );
    }
  };

  return (
    <div className="pt-4">
      <h3 className="text-center">Написать комментарий</h3>
      <form onSubmit={e => submitHandler(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Имя*"
            onChange={e => nameHandler(e)}
            value={name}
            ref={focusField}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Комментарий*"
            value={comment}
            onChange={e => commentHandler(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Написать
        </button>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: comment => addComment(dispatch, comment)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm);
