import axios from "axios";
import { Post } from "./types";

const getPosts = async (): Promise<Post[]> => {
  const baseUrl = "https://gorest.co.in/public/v2";
  const response = await axios.get<Post[]>(`${baseUrl}/posts`);
  return response.data;
};

export default getPosts;
