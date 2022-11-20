import { Post, Todo } from "@/api/types";
import { RECEIVE_POSTS, RECEIVE_TODOS } from "./constants";
import { GlobalState } from "./types";

const mutations = {
  [RECEIVE_POSTS](state: GlobalState, posts: Post[]): void {
    state.posts = posts;
  },
  [RECEIVE_TODOS](state: GlobalState, todos: Todo[]): void {
    state.todos = todos;
  },
};

export default mutations;
