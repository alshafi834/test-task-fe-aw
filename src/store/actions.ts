import {
  FETCH_POSTS,
  RECEIVE_POSTS,
  RECEIVE_TODOS,
  FETCH_TODOS,
  TOOGLE_THEME,
  TOOGLE_THEME_ACTION,
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
  [TOOGLE_THEME_ACTION]: async (context: Context): Promise<void> => {
    context.commit(TOOGLE_THEME);
  },
};

export default actions;
