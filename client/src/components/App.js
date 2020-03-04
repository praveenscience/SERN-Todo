import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import InputForm from "./TodoInput/InputForm";
import TodoList from "./Todos/TodoList";
import { GetTodos } from "../services/API";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    GetTodos().then(res => {
      console.log(res);
      setTodos(res.data);
    });
  }, []);
  return (
    <div className="App">
      <Header Title="ToDos" Dark={true} />
      <InputForm />
      {todos.length > 0 ? (
        <TodoList todos={todos} />
      ) : (
        <img src="https://i.imgur.com/YpQUQt7.gif" alt="Loading..." />
      )}
    </div>
  );
};

export default App;
