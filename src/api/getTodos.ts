import axios from "axios";
import { Todo } from "./types";

const getTodos = async (): Promise<Todo[]> => {
  const baseUrl = "https://gorest.co.in/public/v2";
  const response = await axios.get<Todo[]>(`${baseUrl}/todos`);
  return response.data;
};

export default getTodos;
