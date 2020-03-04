import React from "react";
import Header from "./Header/Header";
import InputForm from "./TodoInput/InputForm";
import TodoList from "./Todos/TodoList";

const App = () => {
  return (
    <div className="App">
      <Header Title="ToDos" Dark={true} />
      <InputForm />
      <TodoList />
    </div>
  );
};

export default App;
