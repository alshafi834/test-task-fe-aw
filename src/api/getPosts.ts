import axios from "axios";
import { Post } from "./types";

const getPosts = async (): Promise<Post[]> => {
  const baseUrl = "https://gorest.co.in/public/v2"; //Could've stored in the env file. but keeping it simple, so that the project can be run easily
  const response = await axios.get<Post[]>(`${baseUrl}/posts`);
  return response.data;
};

export default getPosts;
