import { FETCH_POSTS, RECEIVE_POSTS } from "./constants";
import getPosts from "../api/getPosts";
import { Commit } from "vuex";

interface Context {
  commit: Commit;
}

const actions = {
  [FETCH_POSTS]: async (context: Context): Promise<void> => {
    console.log("enter here");
    const posts = await getPosts();
    context.commit(RECEIVE_POSTS, posts);
  },
};

export default actions;
