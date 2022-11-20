import { GlobalState } from "./types";

const state = (): GlobalState => {
  return {
    posts: [],
    todos: [],
    darkTheme: true,
  };
};

export default state;
