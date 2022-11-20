import { Post, Todo } from "@/api/types";
import { LATEST_POSTS, TODOS_BY_ID } from "./constants";
import { GlobalState } from "./types";

const getters = {
  [LATEST_POSTS](state: GlobalState): Post[] {
    const latestPosts = state.posts.slice(0, 4);
    return latestPosts;
  },

  [TODOS_BY_ID](state: GlobalState): Todo[] {
    const myUserId = state.todos[0];
    const myTodos = state.todos.filter(
      (todo) => todo.user_id === myUserId.user_id
    );
    return myTodos;
  },
};

export default getters;
