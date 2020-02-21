import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

export default compose(
  firebaseConnect([
    {
      path: "todos",
      queryParams: ["limitToLast=10"]
    }
  ]),
  connect(({ firebase: { ordered, profile } }) => ({
    todos: ordered.todos,
    uid: profile.uid
  }))
);
