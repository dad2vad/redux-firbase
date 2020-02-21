import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import enhance from "./Todos.enhancer";

const Todos = ({ todos, uid, firebase }) => (
  <div>
    <NewTodo
      onNewSubmit={newTodo =>
        firebase.push("todos", { ...newTodo, owner: "Anonymous" })
      }
    />
    {todos ? (
      todos.map(({ value: todo }, i) => (
        <Todo
          key={`${todo.key}-${i}`}
          text={todo.text}
          owner={todo.owner}
          done={todo.done}
          disabled={todo.owner !== uid}
          onDoneClick={() =>
            firebase.update(`todos/${todo.key}`, { done: !todo.done })
          }
        />
      ))
    ) : (
      <span>Loading</span>
    )}
  </div>
);

Todos.propTypes = {
  todos: PropTypes.array
};

export default enhance(Todos);
