import Axios from "axios";

export const GetTodos = () => Axios.get("/api/todo");
export const GetTodo = id => Axios.get(`/api/todo/${id}`);
