import { GlobalState } from "./types";

const state = (): GlobalState => {
  return {
    posts: [],
    todos: [],
  };
};

export default state;
