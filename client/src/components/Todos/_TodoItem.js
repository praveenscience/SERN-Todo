import React from "react";

const TodoItem = ({ content, done, onClick }) => {
  return (
    <li className="TodoList-Item" onClick={onClick}>
      <i className={"icon-" + (done === 0 ? "close" : "check")}></i>
      {content}
    </li>
  );
};

export default TodoItem;
