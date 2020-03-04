import React from "react";
import TodoItem from "./_TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      <h2>Your ToDos</h2>
      <ul>
        {todos.map((todo, key) => (
          <TodoItem key={key} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
