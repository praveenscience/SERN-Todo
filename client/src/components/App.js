import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import InputForm from "./TodoInput/InputForm";
import TodoList from "./Todos/TodoList";
import { GetTodos, AddTodo, DeleteTodo } from "../services/API";

const App = () => {
  const [todos, setTodos] = useState([]);
  const refreshTodos = () =>
    GetTodos().then(res => {
      console.log(res);
      setTodos(res.data);
    });
  useEffect(() => {
    refreshTodos();
  }, []);
  const handleSubmit = todo => {
    AddTodo(todo).then(res => {
      if (res.data.success) {
        refreshTodos();
      }
    });
  };
  const handleDelete = todo => {
    DeleteTodo(todo).then(() => {
      refreshTodos();
    });
  };
  return (
    <div className="App">
      <Header Title="ToDos" Dark={true} />
      <InputForm onSubmit={handleSubmit} />
      {todos.length > 0 ? (
        <TodoList todos={todos} handleDelete={handleDelete} />
      ) : (
        <img src="https://i.imgur.com/YpQUQt7.gif" alt="Loading..." />
      )}
    </div>
  );
};

export default App;
