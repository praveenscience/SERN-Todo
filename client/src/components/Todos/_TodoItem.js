import React from "react";

const TodoItem = ({ content, done, onClick, onDelete }) => {
  return (
    <li className="TodoList-Item" onClick={onClick}>
      <i className={"icon-" + (done === 0 ? "close" : "check")}></i>
      {content}
      <i className="icon-trash" onClick={() => onDelete()}></i>
    </li>
  );
};

export default TodoItem;
