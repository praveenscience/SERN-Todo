import React, { useState, useEffect } from "react";
import TodoItem from "./_TodoItem";
import { GetTodos } from "../../services/API";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    GetTodos().then(res => {
      console.log(res);
      setTodos(res.data);
    });
  }, []);
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
