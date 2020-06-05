import React from "react";
import Comments from "./components/comments";
import AddCommentForm from "./components/add-comment-form";

function App() {
  return (
    <div className="App container p-3">
      <Comments />
      <AddCommentForm />
    </div>
  );
}

export default App;
