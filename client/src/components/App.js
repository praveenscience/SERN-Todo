import React from "react";
import Header from "./Header/Header";
import InputForm from "./TodoInput/InputForm";

const App = () => {
  return (
    <div className="App">
      <Header Title="ToDos" Dark={true} />
      <InputForm />
    </div>
  );
};

export default App;
