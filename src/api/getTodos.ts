import axios from "axios";
import { Todo } from "./types";

const getTodos = async (): Promise<Todo[]> => {
  const baseUrl = "https://gorest.co.in/public/v2"; //Could've stored in the env file. but keeping it simple, so that the project can be run easily
  const response = await axios.get<Todo[]>(`${baseUrl}/todos`);
  return response.data;
};

export default getTodos;
