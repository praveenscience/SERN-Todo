import Axios from "axios";

export const GetTodos = () => Axios.get("/api/todo");
export const GetTodo = id => Axios.get(`/api/todo/${id}`);

export const AddTodo = todo => Axios.post("/api/todo", { todo });
export const DeleteTodo = id => Axios.delete(`/api/todo/${id}`);
