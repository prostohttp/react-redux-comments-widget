import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import commentsReducer from "./state/reducers/comments-reducer";
import { Provider } from "react-redux";

const store = createStore(
  commentsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("comments", JSON.stringify(store.getState().comments));
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
