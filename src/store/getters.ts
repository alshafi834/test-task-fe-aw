import { Post, Todo } from "@/api/types";
import { LATEST_POSTS, TODOS_BY_ID } from "./constants";
import { GlobalState } from "./types";

const getters = {
  [LATEST_POSTS](state: GlobalState): Post[] {
    console.log("latest posts");
    const latestPosts = state.posts.slice(0, 4);
    return latestPosts;
  },

  [TODOS_BY_ID](state: GlobalState): Todo[] {
    const myUserId = 3021;
    const myTodos = state.todos.filter((todo) => todo.user_id === myUserId);
    return myTodos;
  },
};

export default getters;
