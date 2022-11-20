import {
  FETCH_POSTS,
  RECEIVE_POSTS,
  RECEIVE_TODOS,
  FETCH_TODOS,
} from "./constants";
import getPosts from "../api/getPosts";
import getTodos from "../api/getTodos";
import { Commit } from "vuex";

interface Context {
  commit: Commit;
}

const actions = {
  [FETCH_POSTS]: async (context: Context): Promise<void> => {
    const posts = await getPosts();
    context.commit(RECEIVE_POSTS, posts);
  },
  [FETCH_TODOS]: async (context: Context): Promise<void> => {
    const todos = await getTodos();
    context.commit(RECEIVE_TODOS, todos);
  },
};

export default actions;
